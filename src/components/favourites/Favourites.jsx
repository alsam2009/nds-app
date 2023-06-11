import React, {useState} from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/slices/favouriteSlice'

const Favourites = ({ data }) => {
  const { favourites } = useSelector(state => state.favourites)
  const [ isExistNews, setisExistNews ] = useState (() => favourites?.some(news => news?.id === data.id))

  const setNewstoFavoutites = () => {
    setisExistNews(true)
    dispatch(actions.addNewsToFavoutites(data))
  }

  const removeNewsFromFavoutites = () => {
    setisExistNews(false)
    dispatch(actions.removeNewsFromFavoutites(data.id))
  }

  const dispatch = useDispatch()

  return (
    isExistNews ? <FaHeart  fill="red" onClick={removeNewsFromFavoutites} className='card_icon text-base cursor-pointer text-base-400 dark:text-base-300'/> : <FaRegHeart  fill="currentColor" onClick={setNewstoFavoutites} className='card_icon text-base cursor-pointer text-base-400 dark:text-base-300'/>
  )
}

export default Favourites