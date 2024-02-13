import { useContext } from "react";
import { getFormatedDate } from "../../utils/date-utils";
import { CategoryContext, SearchContext } from "../../contexts";
import useDebounce from "../../hooks/useDebounce";

export default function Navbar() {
  const { category, setCategory } = useContext(CategoryContext);
  const { setSearchTerm } = useContext(SearchContext);
  const debounceSearch = useDebounce((value) => {
    setSearchTerm(value);
  }, 1000);

  const handleSearch = (e) => {
    const value = e.target.value;
    debounceSearch(value);
  };

  return (
    <nav className="border-b border-black py-6 md:py-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-6">
        {/* date */}
        <div className="flex items-center space-x-4">
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0.5C12.1421 0.499999 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.499999 3.85786 3.85786 0.5 8 0.5Z"
              stroke="#00D991"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 15.4286L8 0.571507"
              stroke="#00D991"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.4995 14.9999C10.4995 14.9999 12.5715 12.6429 12.5715 8.00008C12.5715 3.35722 10.4995 0.999939 10.4995 0.999939"
              stroke="#00D991"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.50049 1.00006C5.50049 1.00006 3.4285 3.35706 3.4285 7.99992C3.4285 12.6428 5.50049 15.0001 5.50049 15.0001"
              stroke="#00D991"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.4282 8L0.499512 8"
              stroke="#00D991"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.5 5C1.5 5 3.5 5 8 5C12.5 5 14.5 5 14.5 5"
              stroke="#00D991"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.5 11C1.5 11 3.5 11 8 11C12.5 11 14.5 11 14.5 11"
              stroke="#00D991"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{getFormatedDate("", "date")}</span>
        </div>
        {/* Logo */}
        <a href="/">
          <img
            className="max-w-[100px] md:max-w-[165px]"
            src="./assets/logo.png"
            alt="Lws"
          />
        </a>
        {/* Logo Ends */}
        {/* */}
        <div className="flex items-center space-x-3 lg:space-x-8">
          <form action="#">
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
              <input
                className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                type="search"
                onChange={handleSearch}
                placeholder="Search Location"
                required
              />
            </div>
          </form>
          <img src="./assets/icons/search.svg" />
        </div>
      </div>
      {/* categories */}
      <div className="container mx-auto mt-6">
        <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
          <li>
            <a
              href="#"
              style={{ color: category === "general" && "#00d991" }}
              onClick={() => setCategory("general")}
            >
              General
            </a>
          </li>
          <li>
            <a
              href="#"
              style={{ color: category === "business" && "#00d991" }}
              onClick={() => setCategory("business")}
            >
              Business
            </a>
          </li>
          <li>
            <a
              href="#"
              style={{ color: category === "entertainment" && "#00d991" }}
              onClick={() => setCategory("entertainment")}
            >
              Entertainment
            </a>
          </li>
          <li>
            <a
              href="#"
              style={{ color: category === "health" && "#00d991" }}
              onClick={() => setCategory("health")}
            >
              Health
            </a>
          </li>
          <li>
            <a
              href="#"
              style={{ color: category === "science" && "#00d991" }}
              onClick={() => setCategory("science")}
            >
              Science
            </a>
          </li>
          <li>
            <a
              href="#"
              style={{ color: category === "sports" && "#00d991" }}
              onClick={() => setCategory("sports")}
            >
              Sports
            </a>
          </li>
          <li>
            <a
              href="#"
              style={{ color: category === "technology" && "#00d991" }}
              onClick={() => setCategory("technology")}
            >
              Technology
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
