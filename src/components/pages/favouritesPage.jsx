import React from 'react'
import { Divider } from '../components'
import { useSelector } from 'react-redux'
import { Card } from '../components'

function FavouritesPage({ name, color }) {
  let { favourites } = useSelector(state => state.favourites)
  return (
    <>

      <Divider name={name} color={color} />
      {favourites.length > 0
        ? <div className="dark:min-h-[calc(100vh-146px)] dark:bg-base-500 dark:text-base-300">
            <ul className="container px-8 md:px-4 grid grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 gap-4 dark:bg-base-500">
          {favourites.map((item) => <Card data={item} key={item.title} />)}
            </ul>
          </div>
        :
          <div className=" px-8 dark:text-base-300 dark:min-h-[calc(100vh-146px)] dark:bg-base-500">
            <p >У вас ничего нет в Избранном 🤷‍♀️</p>
          </div>
        }

    </>
  )
}

export default FavouritesPage