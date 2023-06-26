// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetcher } from '../tools/fetcher';
import SERVER_URI from '../../api/api';

const TopNews = () => {
  const [randomData, setRandomData] = useState();

  useEffect(() => {
    const quantityRandomNews = 9;
    const getData = async () => {
      const newData = await fetcher(
        `${SERVER_URI}?random=${quantityRandomNews}`
      );
      setRandomData(newData);
    };
    getData();
  }, []);

  return (
    <div className='flex h-[518px] w-full flex-col bg-base-200 shadow-md dark:bg-base-500 dark:shadow-2xl sm:h-auto'>
      <div className='flex h-10 items-center justify-start border-b-2 border-base-400 bg-base-300 p-1.5 text-base-500 dark:border-none dark:bg-base-600/50 dark:text-base-300 lg:text-sm md:text-xs'>
        <p>
          <b>РЕКОМЕНДАЦИИ</b>
        </p>
      </div>
      {randomData &&
        randomData.map((item, i) => (
          <div
            key={i}
            className='flex h-14 w-full items-center overflow-hidden text-ellipsis border-b-2 border-base-300 pl-1.5 text-sm leading-4  dark:border-base-400/50 dark:text-base-300 lg:text-xs md:text-[10px]'
          >
            <span>🔊</span>
            <Link
              to={`/card/${item._id}`}
              target='_blank'
              rel='noopener noreferrer'
              className='cursor-pointer pl-2'
            >
              {item.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default TopNews;
