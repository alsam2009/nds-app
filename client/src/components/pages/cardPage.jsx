import React, {useContext} from 'react';
// import { useParams } from 'react-router-dom';
// import useSWR from 'swr';
// import { fetcher } from '../tools/fetcher';
import { ReactComponent as Loader } from '../../images/loader2.svg'
// import SERVER_URI from '../../api/api';
import { CardContext } from '../../context/cardContext';

const CardPage = () => {
  // const { id } = useParams();

  // const { data, error, isLoading } = useSWR(
  //   `${SERVER_URI}/${id}`,
  //   fetcher
  // );

  // if (error) return <div>Ошибка загрузки</div>;
  // if (isLoading) return
  const { cardData } = useContext(CardContext)
  console.log(cardData)
  if (!cardData) return
  <div className="w-full  h-screen flex justify-center items-center dark:bg-base-500 dark:text-base-400">
    <Loader fill="rgb(167,165,165)" stroke="" width={70} />
      </div>;

  return (
    cardData && (
      <div className='h-screen w-auto dark:bg-base-500'>
        <div className='flex pl-12 pr-8 pt-3 text-base-500 dark:bg-base-500 dark:text-base-400'>
          <img
            className='h-[60%] w-[40%] pt-7'
            src={cardData.image_url}
            alt={cardData.title}
          />
          <div className='py-5 pl-5 text-xl dark:bg-base-500 dark:text-base-100 '>
            <h2 className='font-semibold md:text-base'>{cardData.title}</h2>
            <div className='pt-4 text-lg text-base-500 dark:bg-base-500 dark:text-base-400 md:text-base'>
              {cardData.article_preview}
              <div className='pt-3 text-base-500 dark:bg-base-500 dark:text-base-400'>
                Полную новость читайте {' '}
                <a
                  className='text-color-100 underline dark:bg-base-500 dark:text-color-100 dark:hover:text-color-150 hover:text-color-150'
                  href={cardData.article_url}
                >
                  здесь...
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
