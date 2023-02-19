import React, { useContext, useState } from "react";
import DataContex from "../dataContex";

const Search = () => {
  const { setGlobalData } = useContext(DataContex);
  const [btnDisable, setBtnDisable] = useState(true);
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const response = await fetch(
      `http://localhost:3000/data?q=${encodeURIComponent(query)}`
    );
    const data = await response.json();

    setGlobalData(data);
  };

  const handleChange = (e) => {
    setBtnDisable(false);
    setQuery(e.target.value);
    if (query.length < 1) {
      setGlobalData(null);
    }
  };

  return (
    <>
      <div className="dark:bg-black flex search bg-lime-600">
        <input
          className="bg-slate-200 h-6 mr-2 pl-2 text-sm rounded font-search  focus:outline-none focus:bg-white"
          type="search"
          name="search"
          placeholder="Найти"
          value={query}
          onChange={handleChange}
        />
        <button onClick={handleSearch} disabled={btnDisable}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-white cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Search;
