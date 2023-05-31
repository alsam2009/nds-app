import React from 'react';
import { NavLink } from 'react-router-dom';

import Search from '../search/search';
import { navbar } from '../../nds.config'

const Menu = () => {
  const setActive = ({ isActive }) =>
    isActive
      ? `block px-4 py-2 mr-2 font-normal dark:text-base-600 bg-base-500 dark:bg-base-400 hover:bg-base-500 dark:hover:bg-base-400 hover:transition`
      : `"block px-4 py-2 mr-2 font-normal dark:hover:text-base-600 hover:bg-base-500 dark:hover:bg-base-400 hover:transition`;

  return (
    <nav className="sticky top-0 z-50 bg-color-550 dark:bg-base-600 z-99">
      <div className="mx-8 flex w-auto items-center justify-between">
        <div className="text-md flex font-bold text-base-100 dark:text-base-300">
          <NavLink to="/" className={setActive}>
            {navbar[0]}
          </NavLink>

          <NavLink
            to={`/important?filter=Важное`}
            state="tag"
            className={setActive}
          >
            {navbar[1]}
          </NavLink>
          <NavLink
            to={`/novelty?filter=Новинки`}
            state="tag"
            className={setActive}
          >
            {navbar[2]}
          </NavLink>
          <NavLink
            to={`/survey?filter=Обзоры`}
            state="tag"
            className={setActive}
          >
            {navbar[3]}
          </NavLink>
          <NavLink
            to={`/events?filter=Мероприятия`}
            state="tag"
            className={setActive}
          >
            {navbar[4]}
          </NavLink>
          <NavLink
            to={`/interesting?filter=Интересно`}
            state="tag"
            className={setActive}
          >
            {navbar[5]}
          </NavLink>
        </div>
        <Search />
      </div>
    </nav>
  );
};

export default Menu;
