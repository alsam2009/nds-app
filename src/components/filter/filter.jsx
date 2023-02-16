import React, { useContext } from "react";
import DataContex from "../dataContex";

const Filter = () => {
  const { setGlobalData } = useContext(DataContex);

  const handleButton = async (e) => {
    const response = await fetch(
      `http://localhost:3000/data?tag_article=${encodeURIComponent(
        e.target.textContent
      )}`
    );
    const data = await response.json();
    setGlobalData(data);
  };

  return (
    <>
      <button
        onClick={handleButton}
        className="block hover:-gray-300 px-4 py-2 font-normal hover:bg-gray-900 hover:transition mr-2"
      >
        Важное
      </button>
      <button
        onClick={handleButton}
        className="block hover:-gray-300 px-4 py-2 font-normal hover:bg-gray-900 mr-2"
      >
        Новинки
      </button>
      <button
        onClick={handleButton}
        className="block hover:-gray-300 px-4 py-2 font-normal hover:bg-gray-900 mr-2"
      >
        Обзоры
      </button>
      <button
        onClick={handleButton}
        className="block hover:-gray-300 px-4 py-2 font-normal hover:bg-gray-900 mr-2"
      >
        Мероприятия
      </button>
      <button
        onClick={handleButton}
        className="block hover:-gray-300 px-4 py-2 font-normal hover:bg-gray-900 mr-2"
      >
        Интересно
      </button>
    </>
  );
};

export default Filter;
