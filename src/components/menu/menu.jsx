import React from "react";
import { NavLink } from "react-router-dom";
import Filter from "../filter/filter";

import Search from "../search/search";

const Menu = () => {
  return (
    <nav className="dark:bg-slate-600 sticky top-0 bg-green-600 z-10">
      <div className="flex w-auto items-center mx-8 justify-between">
        <div className="flex text-md font-bold text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block hover:-gray-300 px-4 py-2 font-normal hover:bg-gray-900 hover:transition mr-2 bg-gray-900"
                : "block hover:-gray-300 px-4 py-2 font-normal hover:bg-gray-900 hover:transition mr-2"
            }
          >
            Главная
          </NavLink>
          <Filter />
        </div>
        <Search />
      </div>
    </nav>
  );
};

export default Menu;
