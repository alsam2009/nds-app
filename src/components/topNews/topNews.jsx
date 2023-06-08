import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetcher } from '../tools/fetcher';
import  {getRandomArray} from "../tools/tools"


const TopNews = () => {
  const [randomData, setRandomData] = useState();
  // const [length, setLength] = useState();

  useEffect(() => {
    const getRandomNewsLink = (length, max) => {
      const randomNewsId =  getRandomArray(length, max).reduce(
        (acc, item) => acc + item + '&id=', 'id='
      );
      return `http://localhost:3000/data?`+ randomNewsId.slice(0, -4);
    };

    const getData = async () => {
      const dataLength = await axios(
        `http://localhost:3000/data?_page=1&_limit=1`
      ).then((res) => res.headers['x-total-count']);
      const newData = await fetcher(getRandomNewsLink(dataLength, 9));
      setRandomData(newData);
    };

    getData();
  }, []);

  return (
    <div className='flex h-[518px] sm:h-auto w-full flex-col bg-base-200 shadow-md dark:bg-base-500 dark:shadow-2xl'>
      <div className='flex h-10 items-center justify-start border-b-2 border-base-400 bg-base-300 p-1.5 text-base-500 dark:bg-base-600/50 dark:text-base-300 dark:border-none'>
        <p>
          <b>ТОП</b>
        </p>
      </div>

      {randomData &&
        randomData.map((item, i) => (
          <>
            <div
              key={i}
              className='flex h-14 w-full items-center border-b-2 border-base-300 pl-1.5 text-sm lg:text-xs md:text-[10px] leading-4  dark:border-base-400/50 dark:text-base-300 overflow-hidden text-ellipsis'
            >
              <span>🔊</span>
              <Link
                to={`/card/${item.id}`}
                target='_blank'
                rel='noopener noreferrer'
                className='cursor-pointer pl-2'
              >
                {item.title}
              </Link>
            </div>
          </>
        ))}
    </div>
  );
};

export default TopNews;
