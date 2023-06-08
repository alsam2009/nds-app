import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Search from '../search/search';
import { navbar } from '../../nds.config';
import { HiMenu, HiX } from 'react-icons/hi';

const Menu = () => {
  const setActive = ({ isActive }) =>
    isActive
      ? `block px-4 lg:px-1 py-2 lg:pt-[0.5rem] lg:pb-[0.7rem] mr-2 font-normal dark:text-base-600 bg-base-500 dark:bg-base-400 hover:bg-base-500 dark:hover:bg-base-400 hover:transition`
      : `"block px-4 lg:px-1 py-2 mr-2 font-normal dark:hover:text-base-600 hover:bg-base-500 dark:hover:bg-base-400 hover:transition`;
  let [open, setOpen] = useState(false);
  const menuIcon = 'text-2xl text-base-200 dark:text-base-300';

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    function handleWindowResize() {
      setOpen(false);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      <nav className='sticky top-0 z-50 bg-color-550 shadow-md dark:bg-base-600'>
        <div className='mx-8 md:mx-4 flex h-[38px] w-auto items-center justify-between'>
          <div className='flex font-bold text-base-100 dark:text-base-300 lg:text-sm md:hidden'>
            <NavLink to='/' className={setActive}>
              {navbar[0]}
            </NavLink>

            <NavLink
              to={`/important?filter=${navbar[4]}`}
              state='tag'
              className={setActive}
            >
              {navbar[4]}
            </NavLink>
            <NavLink
              to={`/novelty?filter=${navbar[5]}`}
              state='tag'
              className={setActive}
            >
              {navbar[5]}
            </NavLink>
            <NavLink
              to={`/survey?filter=${navbar[6]}`}
              state='tag'
              className={setActive}
            >
              {navbar[6]}
            </NavLink>
            <NavLink
              to={`/events?filter=${navbar[7]}`}
              state='tag'
              className={setActive}
            >
              {navbar[7]}
            </NavLink>
            <NavLink
              to={`/interesting?filter=${navbar[8]}`}
              state='tag'
              className={setActive}
            >
              {navbar[8]}
            </NavLink>
          </div>
          <div
            className='hidden items-center md:flex'
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <HiX className={menuIcon} />
            ) : (
              <HiMenu className={menuIcon} />
            )}
          </div>

          <Search />
        </div>
        <div
          className={`${
            open ? 'top-[35px]' : 'top-[-490px]'
          } absolute left-0 z-40 flex h-[200px] w-full flex-col gap-2 bg-black/90 pt-2 text-center text-base-200 transition-all duration-100 ease-in font-semibold`}
        >
          <NavLink to='/' className='hover:text-color-150' onClick={closeMenu}>
            {navbar[0]}
          </NavLink>

          <NavLink
            to={`/important?filter=${navbar[4]}`}
            state='tag'
            className='hover:text-color-150'
            onClick={closeMenu}
          >
            {navbar[4]}
          </NavLink>
          <NavLink
            to={`/novelty?filter=${navbar[5]}`}
            state='tag'
            className='hover:text-color-150'
            onClick={closeMenu}
          >
            {navbar[5]}
          </NavLink>
          <NavLink
            to={`/survey?filter=${navbar[6]}`}
            state='tag'
            className='hover:text-color-150'
            onClick={closeMenu}
          >
            {navbar[6]}
          </NavLink>
          <NavLink
            to={`/events?filter=${navbar[7]}`}
            state='tag'
            className='hover:text-color-150'
            onClick={closeMenu}
          >
            {navbar[7]}
          </NavLink>
          <NavLink
            to={`/interesting?filter=${navbar[8]}`}
            state='tag'
            className='hover:text-color-150'
            onClick={closeMenu}
          >
            {navbar[8]}
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Menu;
