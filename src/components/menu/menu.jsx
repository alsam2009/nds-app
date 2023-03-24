import React from 'react';
import { NavLink } from 'react-router-dom';

import Search from '../search/search';

const Menu = () => {
  const setActive = ({ isActive }) =>
    isActive
      ? `block px-4 py-2 mr-2 font-normal dark:text-base-600 bg-base-500 dark:bg-base-400 hover:bg-base-500 dark:hover:bg-base-400 hover:transition`
      : `"block px-4 py-2 mr-2 font-normal dark:hover:text-base-600 hover:bg-base-500 dark:hover:bg-base-400 hover:transition`;

  return (
    <nav className='sticky top-0 z-10 bg-color-550 dark:bg-base-600'>
      <div className='mx-8 flex w-auto items-center justify-between'>
        <div className='text-md flex font-bold text-base-100 dark:text-base-300'>
          <NavLink to='/' className={setActive}>
            Главная
          </NavLink>

          <NavLink to={`/important?filter=Важное`} className={setActive}>
            Важное
          </NavLink>
          <NavLink to={`/novelty?filter=Новинки`} className={setActive}>
            Новинки
          </NavLink>
          <NavLink to={`/survey?filter=Обзоры`} className={setActive}>
            Обзоры
          </NavLink>
          <NavLink to={`/events?filter=Мероприятия`} className={setActive}>
            Мероприятия
          </NavLink>
          <NavLink to={`/interesting?filter=Интересно`} className={setActive}>
            Интересно
          </NavLink>
        </div>
        <Search />
      </div>
    </nav>
  );
};

export default Menu;
