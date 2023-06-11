import React from 'react'
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { useSelector } from 'react-redux';

function FavoritesAddInfo() {
  const { favourites } = useSelector(state => state.favourites)
  return (
    <Link to={'/favourites/'}>
      <div className='relative'>
        <FaHeart fill="currentColor" className='h-5 w-5 sm:h-4 sm:w-4 cursor-pointer text-base-100 mr-3 sm:mr-2 icon hover:text-color-300' />
        <span className='absolute -top-0.5 left-4 h-3 w-3 sm:h-4 sm:w-4 sm:rounded-none sm:top-0.5 sm:left-0 sm:bg-transparent sm:text-base-100 text-[8px] sm:text-[7px] text-center text-base-600 cursor-pointer font-bold rounded-full bg-white'>{favourites.length > 0 ? favourites.length : 0}</span>
        </div>
    </Link>
  )
}

export default FavoritesAddInfo