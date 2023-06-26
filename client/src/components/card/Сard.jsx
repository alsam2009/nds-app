import React from 'react';
import { Link } from 'react-router-dom';
import tagIcon from '../../images/tag-icon.svg';
import { formatDate, getColorTag, truncateSentence } from '../tools/tools';
import { Favourites } from '../components';

const Card = ({ data }) => {
  const { id, title, publication_date, tag_article, image_url } = data;
  const { baseClass, otherClass } = getColorTag(tag_article);

  return (
    <div className='flex h-[416px]  max-w-xs flex-col bg-base-100 px-0 shadow-md dark:bg-base-500 dark:shadow-2xl overflow-hidden'>
      <Link to={`/card/${id}`} target="_blank" rel="noopener noreferrer">
        <div className='relative'>
          <div
            className={
              `absolute top-0 left-[20px] md:left-0 flex items-center ` + baseClass
            }
          >
            <div className={otherClass + ' p-1.5 md:hidden'}>
              <img src={tagIcon} alt='tag-icon' loading="lazy" />
            </div>
            <div className='p-1.5 text-xs md:text-[10px] leading-none text-white'>
              {tag_article.toUpperCase()}
            </div>
          </div>
          <img
            className='h-[220px] w-[100%] object-cover'
            src={image_url}
            alt={title}
            loading="lazy"
          />
        </div>
        <div className='grow p-[20px]'>
          <h2 className='text-base xl:text-base lg:text-sm font-medium underline dark:text-base-300'>
            {truncateSentence(title)}
          </h2>
        </div>
        </Link>
        <div className='mt-auto p-3'>
          <div className='flex items-center justify-between'>
            <p className='text-xs lg:text-[10px] text-base-400 dark:text-base-300'>
              {formatDate(publication_date)}
            </p>
          <Favourites data={data} />
          </div>
      </div>
      </div>

  );
};

export default React.memo(Card);
