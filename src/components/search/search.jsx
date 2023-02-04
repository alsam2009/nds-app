//import axios from "axios";
//import axios from "axios";
import React, { useState } from "react";
import iconSearch from "../../images/search.svg";
import CardList from "../card/cardList";

const Search = () => {
  const [seachValue, setSearchValue] = useState("");
  const [id, setId] = useState();
  //const [searchData, setSearchData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setId(seachValue);

    // axios.get(`http://localhost:3000/data?q=${seachValue}`).then((res) => {
    //   setSearchData(res.data);
    // });
  };
  //   useEffect(() => {
  //     setSearchValue(seachValue);
  //   }, [seachValue]);

  return (
    <>
      <div className="bg-lime-600 ">
        <form className="flex p-2" onSubmit={handleSubmit}>
          <input
            id={id}
            className="p-1 outline-none"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="submit">
            <img className="w-8 ml-2" src={iconSearch} alt="search" />
          </button>
        </form>
      </div>
      <CardList seachValue={seachValue} />
    </>
  );
};

export default Search;
