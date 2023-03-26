import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && query.length > 0) {
      window.location.href = `/search?filter=${query}`;;
    }
  };

  return (
    <>
      <div className="search flex bg-color-550  dark:bg-base-600">
        <input
          className="font-search mr-2 h-6 rounded bg-base-200 pl-2 text-sm focus:bg-base-100 focus:outline-none"
          type="search"
          name="search"
          placeholder="Найти"
          value={query}
          onChange={handleChange}
          onKeyUp={handleKeyPress}
        />
        {query.length > 0 ? (
          <Link to={`/search?filter=${query}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 cursor-pointer text-base-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </Link>
        ) : (
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 cursor-pointer text-base-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        )}
      </div>
    </>
  );
};

export default Search;
