import React from "react";
import { NavLink } from "react-router-dom";

const Filter = () => {
  const setActive = ({ isActive }) =>
    isActive
      ? `block hover:-base-300 px-4 py-2 font-normal hover:bg-base-600 hover:transition mr-2 bg-base-600`
      : `block hover:-base-300 px-4 py-2 font-normal hover:bg-base-600 hover:transition mr-2`;

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
