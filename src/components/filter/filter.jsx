import React from "react";
import { NavLink } from "react-router-dom";

const Filter = () => {
  const setActive = ({ isActive }) =>
    isActive
      ? "block px-4 py-2 mr-2 font-normal dark:text-base-600 bg-base-500 dark:bg-base-400 hover:bg-base-500 dark:hover:bg-base-400 hover:transition"
      : "block px-4 py-2 font-normal dark:hover:text-base-600 mr-2 hover:bg-base-500 dark:hover:bg-base-400 hover:transition";

  return (
    <>
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
    </>
  );
};

export default Filter;
