import React, { useState } from "react";
import iconSearch from "../../images/search.svg";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [flag, setFlag] = useState(false);

  const handleSearch = async () => {
    const response = await fetch(
      `http://localhost:3000/data?q=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    setResults(data);
    setFlag(true);
  };

  return (
    <>
      <div className="bg-lime-600 flex p-2">
        <input
          className="p-1 outline-none"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>
          <img className="w-8 ml-2" src={iconSearch} alt="search" />
        </button>
      </div>
      <div>
        {flag && <h3 className="text-center m-2">Результаты поиска...</h3>}
        <ul className="flex flex-wrap">
          {results.map((item, i) => (
            <li key={i}>
              <a href={item.article_url} target="_blank" rel="noreferrer">
                <div className="h-[300px] w-[200px] max-w-xs bg-white px-0 shadow-md mr-3 mt-3 flex flex-col">
                  <div className="">
                    <img
                      className="w-[100%] h-[147px] object-cover"
                      src={item.image_url}
                      alt={item.title}
                    />
                  </div>
                  <div className="grow p-[20px]">
                    <h2 className="text-sm font-medium">
                      {item.title.length > 55
                        ? item.title.substring(0, 55) + "..."
                        : item.title}
                    </h2>
                  </div>
                  <div className="mt-auto p-3">
                    <div className="flex justify-between items-center">
                      <p className="text-gray-600 text-xs">
                        {item.publication_date}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Search;
