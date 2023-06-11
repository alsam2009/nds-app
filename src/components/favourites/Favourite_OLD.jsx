import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Favourite = ({ id }) => {
  const itemKey = 'favouriteIDs'
  let [toggle, setToggle] = useState(false)

  const changeLS = (id, toggle) => {
    let newsIDs = localStorage.getItem(itemKey)
    if (newsIDs === null || '') {
      localStorage.setItem(itemKey, id)
      return
    }
    if (toggle === true && newsIDs) {
      let newLSvalue = newsIDs + ',' + id;
      localStorage.setItem(itemKey, newLSvalue);
      return
    }
    if (toggle === false && newsIDs) {
      let temp = newsIDs.split(',').filter(item => item !== String(id));
      temp.length === 0
        ? localStorage.removeItem(itemKey)
        : localStorage.setItem(itemKey, temp);
      return
    }
  }

  const toggleFavourite = () => {
    if (id) {
      toggle = !toggle;
      setToggle(toggle);
      changeLS(id, toggle)
    }
  }

  return (
    toggle ? <FaHeart  fill="red" onClick={toggleFavourite} className='card_icon text-base cursor-pointer text-base-400 dark:text-base-300'/> : <FaRegHeart  fill="currentColor" onClick={toggleFavourite} className='card_icon text-base cursor-pointer text-base-400 dark:text-base-300'/>
  )
}

export default Favourite