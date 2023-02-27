import React from "react";
import { NavLink } from "react-router-dom";
import Filter from "../filter/filter";

import Search from "../search/search";

const Menu = () => {
  return (
    <nav className="dark:bg-base-400 sticky top-0 bg-color-550 z-10">
      <div className="flex w-auto items-center mx-8 justify-between">
        <div className="flex text-md font-bold text-base-100">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block hover:-base-300 px-4 py-2 font-normal hover:bg-base-600 hover:transition mr-2 bg-base-600"
                : "block hover:-base-300 px-4 py-2 font-normal hover:bg-base-600 hover:transition mr-2"
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
