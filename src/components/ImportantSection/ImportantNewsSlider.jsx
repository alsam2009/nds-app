import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi2';
// import { RxDotFilled, RxDot } from 'react-icons/rx';

const ImportantNewsSlider = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextSlide = (currentSlide + 1) % data.length;
      setCurrentSlide(nextSlide);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentSlide, data.length]);

  const goToPrevSlide = () => {
    const prevSlide = (currentSlide - 1 + data.length) % data.length;
    setCurrentSlide(prevSlide);
  };

  const goToNextSlide = () => {
    const nextSlide = (currentSlide + 1) % data.length;
    setCurrentSlide(nextSlide);
  };

  if (!data) return null;

  return (
    data.length > 0 && (
      <>
        <Link
          to={`/card/${data[currentSlide].id}`}
          target='_blank'
          rel='noopener noreferrer'
          className='relative cursor-pointer'
        >
          <div className='mb-5 h-[465px] w-[855px] bg-clip-content pr-10'>
            <img
              src={data[currentSlide].image_url}
              className='h-[465px] w-full animate-fadeIn object-cover'
              alt='slide'
            />
          </div>
          <div
            className='absolute top-0 z-10 h-[465px] w-[855px] pr-10'
            style={{
              background:
                'linear-gradient(180deg, rgba(73, 73, 73, 0) 34.38%, #050505 100%)',
              backgroundClip: 'content-box',
            }}
          ></div>
          <div className='absolute top-0 z-20 flex w-[855px] translate-y-60 flex-col justify-start gap-5 bg-clip-content pr-20 pb-1 pl-5 text-base-100'>
            <h3 className='flex w-24 items-center justify-center border-2 border-color-150 p-1 leading-none'>
              ВАЖНОЕ
            </h3>
            <p className='text-4xl font-semibold underline dark:text-base-200'>
              {data[currentSlide].title}
            </p>
          </div>
        </Link>
        <button className='absolute top-[50%] right-[14%] z-50 block -translate-x-80 cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white duration-500'>
          <HiChevronRight onClick={goToNextSlide} />
        </button>
        <button className='absolute top-[50%] left-[38px] z-50 block  cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white duration-500'>
          <HiChevronLeft onClick={goToPrevSlide} />
        </button>
      </>
    )
  );
};

export default ImportantNewsSlider;
