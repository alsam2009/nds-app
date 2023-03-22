import React, { useState } from "react";
import { Link } from "react-router-dom";
//import DataContex from "../dataContex";

const Search = () => {
  // const { setGlobalData } = useContext(DataContex);
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="dark:bg-black flex search bg-color-550">
        <input
          className="bg-base-200 h-6 mr-2 pl-2 text-sm rounded font-search focus:outline-none focus:bg-base-100"
          type="search"
          name="search"
          placeholder="Найти"
          value={query}
          onChange={handleChange}
        />
        {query.length > 0 ? (
          <Link to={`/search?filter=${query}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-base-100 cursor-pointer"
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
              className="w-5 h-5 text-base-100 cursor-pointer"
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
