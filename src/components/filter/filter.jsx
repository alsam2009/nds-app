import React, { useContext, useEffect, useState } from "react";
import DataContex from "../dataContex";

const Filter = () => {
  const { setGlobalData } = useContext(DataContex);
  const [tags, setTags] = useState([]);

  const handleButton = async (e) => {
    const response = await fetch(
      `http://localhost:3000/data?tag_article=${encodeURIComponent(
        e.target.textContent
      )}`
    );
    const data = await response.json();
    setGlobalData(data);
  };

  useEffect(() => {
    const dataFetch = async () => {
      const response = await fetch("http://localhost:3000/data");
      const data = await response.json();
      const dataArray = data.map((item) => item.tag_article);
      const dataUnic = dataArray.filter(
        (name, index) => dataArray.indexOf(name) === index
      );
      setTags(dataUnic);
    };
    dataFetch();
  }, []);

  return (
    <>
      {Object.values(tags).map((item, i) => (
        <button
          key={i}
          onClick={handleButton}
          className="block hover:-gray-300 px-4 py-2 font-normal hover:bg-gray-900 hover:transition mr-2"
        >
          {item}
        </button>
      ))}
    </>
  );
};

export default Filter;
