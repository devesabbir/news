import { useContext, useEffect, useState } from "react";
import { CategoryContext, SearchContext } from "../contexts";

export default function useNewsQuery() {
  const { category } = useContext(CategoryContext);
  const { searchTerm: search } = useContext(SearchContext);
  const [allNews, setAllNews] = useState([]);
  const [loader, setLoader] = useState({
    status: false,
    message: "",
  });

  const [errors, setErrors] = useState(null);

  const fetchNewsData = async (url) => {
    try {
      setLoader((prev) => ({
        ...prev,
        status: true,
        message: "Data loading from server...",
      }));

      const response = await fetch(url);
      if (!response.ok) {
        const errorMessage = `Fetching Data requiest failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      const AllData = data.articles ?? data.result;

      return AllData;
    } catch (error) {
      setErrors(error);
    } finally {
      setLoader((prev) => ({
        ...prev,
        status: false,
        message: "",
      }));
    }
  };

  useEffect(() => {
    let ignore = false;
    let url =
      category === "All"
        ? "http://localhost:8000/v2/top-headlines"
        : `http://localhost:8000/v2/top-headlines?category=${category}`;

    let queryUrl = `http://localhost:8000/v2/search?q=${search}`;

    const getNews = async (urlString) => {
      const news = await fetchNewsData(urlString);
      if (!ignore) {
        setAllNews(news);
      }
    };

    getNews(search ? queryUrl : url);

    return () => {
      ignore = true;
    };
  }, [category, search]);

  return { allNews, loader, errors };
}
