import React from 'react';
import { Link } from 'react-router-dom';

const CardSmall = ({ data }) => {
  const { id, title, image_url } = data;
  return (
    <Link
      to={`/card/${id}`}
      target='_blank'
      rel='noopener noreferrer'
      className=' flex h-full w-[198px] cursor-pointer flex-col bg-base-100 shadow-md dark:bg-base-500 dark:shadow-2xl'
    >
      <img
        className=' mb-1.5 h-[147px] object-cover'
        src={image_url}
        alt={title}
      />
      <p className='px-1 pb-1 text-xs underline md:text-[10px]'>{title}</p>
    </Link>
  );
};

export default CardSmall;
