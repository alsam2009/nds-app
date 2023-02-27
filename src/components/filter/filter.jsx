import React from "react";
import { NavLink } from "react-router-dom";

//import useTagsData from "../hooks/usetagsData";

const Filter = () => {
  //const tags = useTagsData();
  //const с = ["Важное", "Новинки", "Обзоры", "Важное", "Мероприятия"];
  const setActive = ({ isActive }) =>
    isActive
      ? `block hover:-gray-300 px-4 py-2 font-normal hover:bg-gray-900 hover:transition mr-2 bg-gray-900`
      : `block hover:-gray-300 px-4 py-2 font-normal hover:bg-gray-900 hover:transition mr-2`;

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
