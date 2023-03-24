import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher } from '../tools/fetcher';

const CardPage = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/data/${id}`,
    fetcher
  );

  console.log(data)

  if (error) return <div>Ошибка загрузки</div>;
  if (isLoading) return <div>Загрузка...</div>;

  return (
    data && (
      <div className='h-screen w-auto dark:bg-base-500'>
        <div className='flex pl-12 pr-8 pt-3 text-base-500 dark:bg-base-500 dark:text-base-400'>
          <img
            className='h-[60%] w-[40%] pt-7'
            src={data.image_url}
            alt={data.title}
          />
          <div className='py-5 pl-5 text-xl dark:bg-base-500 dark:text-base-100'>
            <h2>{data.title}</h2>
            <div className='pt-4 text-lg text-base-500 dark:bg-base-500 dark:text-base-400'>
              {data.article_preview}
              <div className='pt-3 text-base-500 dark:bg-base-500 dark:text-base-400'>
                Полную новость читайте по{' '}
                <a
                  className='text-base-500 underline dark:bg-base-500 dark:text-color-100'
                  href={data.article_url}
                >
                  ссылке...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CardPage;