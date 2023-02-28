import React from "react";
import { NavLink } from "react-router-dom";
import Filter from "../filter/filter";

import Search from "../search/search";

const Menu = () => {
  return (
    <nav className="sticky top-0 bg-color-550 dark:bg-base-600 z-10">
      <div className="flex w-auto items-center mx-8 justify-between">
        <div className="flex text-md font-bold text-base-100 dark:text-base-300 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 mr-2 font-normal dark:text-base-600 bg-base-500 dark:bg-base-400 hover:bg-base-500 dark:hover:bg-base-400 hover:transition"
                : "block px-4 py-2 mr-2 font-normal dark:hover:text-base-600 hover:bg-base-500 dark:hover:bg-base-400 hover:transition"
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
