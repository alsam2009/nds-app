import React from 'react'
import { Divider, Card } from '../components'
import { useSearchParams } from 'react-router-dom'
import useSWR from 'swr'
import { fetcher } from '../tools/fetcher';
import { ReactComponent as Loader } from '../../images/loader2.svg'
import SERVER_URI from '../../api/api';

function SearchPage({ name, color }) {
  const [searchParams] = useSearchParams();
  const filterQuery = searchParams.get("filter") || "";
  const { data, error, isLoading } = useSWR(
    `${SERVER_URI}?q=${encodeURIComponent(
      filterQuery
    )}`,
    fetcher
  );

  if (error) return <div>Ошибка загрузки</div>;
  if (isLoading) return
    <div className="w-full  h-screen flex justify-center items-center dark:bg-base-500 dark:text-base-400">
      <Loader fill="rgb(167,165,165)" stroke="" width={70} />
    </div>;
  return (
    <>
      <Divider name={name} color={color} />
      {data.length > 0
        ? <div className="dark:min-h-[calc(100vh-146px)] dark:bg-base-500 dark:text-base-300">
            <ul className="container px-8 md:px-4 grid grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 gap-4 dark:bg-base-500">
          {data.map((item) => <Card data={item} key={item.title} />)}
            </ul>
          </div>
        :
          <div className=" px-8 dark:text-base-300 dark:min-h-[calc(100vh-146px)] dark:bg-base-500">
            <p >По вашему запросу ничего не найдено 🤷‍♀️</p>
          </div>
        }
    </>
  )
}

export default SearchPage