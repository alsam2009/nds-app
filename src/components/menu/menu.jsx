import React from "react";
import Search from "../search/search";
const Menu = () => {
  return (
    <nav className="sticky top-0 bg-green-600">
      <div className="flex w-auto items-center mx-8 justify-between">
        <div className="flex text-md font-bold text-white">
          <a
            href="null"
            className="block hover:-gray-300 px-4 py-2 font-normal hover:bg-gray-900 hover:transition mr-2"
          >
            Важное
          </a>
          <a
            href="null"
            className="block hover:-gray-300 px-4 py-2 font-normal hover:bg-gray-900 mr-2"
          >
            Новинки
          </a>
          <a
            href="null"
            className="block hover:-gray-300 px-4 py-2 font-normal hover:bg-gray-900 mr-2"
          >
            Обзоры
          </a>
          <a
            href="null"
            className="block hover:-gray-300 px-4 py-2 font-normal hover:bg-gray-900 mr-2"
          >
            Мероприятия
          </a>
          <a
            href="null"
            className="block hover:-gray-300 px-4 py-2 font-normal hover:bg-gray-900 mr-2"
          >
            Интересно
          </a>
        </div>
        <Search />
      </div>
    </nav>
  );
};

export default Menu;
