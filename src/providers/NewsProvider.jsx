/* eslint-disable react/prop-types */
import { NewsContext } from "../contexts";
import useNewsQuery from "../hooks/useNewsQuery";

const NewsProvider = ({ children }) => {
  const { allNews, loader, errors } = useNewsQuery();
  return (
    <NewsContext.Provider value={{ allNews, loader, errors }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
