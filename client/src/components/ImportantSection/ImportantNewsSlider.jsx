import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi2';

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
      <div className='relative mb-5 lg:mb-2 sm:mb-0 max-h-[465px] sm:pb-0 w-full overflow-hidden'>
        <div className='absolute top-[50%] sm:top-[45%] z-20 flex w-full flex-col justify-start gap-5 sm:mt-2 xl:gap-3 md:gap-2 sm:gap-1 pr-20 sm:pr-5 lg:pr-5 pb-1 pl-5 lg:text-sm md:text-xs sm:text-[8px] text-base-100 overflow-hidden'>
            <h3 className='flex w-24 lg:w-20 md:w-[72px] sm:w-12 items-center justify-center border-2 border-color-150 p-1 leading-none'>
              ВАЖНОЕ
            </h3>
            <p className='2xl:text-4xl xl:text-2xl xl:leading-7 lg:text-[17px] md:text-sm lg:leading-6 sm:text-sm  sm:leading-4 text-4xl font-semibold underline dark:text-base-200'>
              {data[currentSlide].title}
            </p>
        </div>

        <Link
          to={`/card/${data[currentSlide].id}`}
          target='_blank'
          rel='noopener noreferrer'
          className='cursor-pointer'
        >
          <div className='relative mb-5 sm:mb-4 w-full h-full xl:max-h-[340px] lg:max-h-[316px] md:max-h-[238px] sm:max-h-[190px] max-h-[465px] overflow-hidden flex'>
          {data.map((slide, index) => (
            <div
              key={slide.id}
              className={`${index === currentSlide ? 'block' : 'hidden'}`}
            >
              <img
                src={slide.image_url}
                className='w-full h-auto animate-fadeIn object-cover z-0'
                alt='slide'
                loading="lazy"
              />
            </div>
            ))}
             <div
            className='absolute h-[100%] xl:h-[100%] lg:h-[100%] top-0 left-0 z-10 w-full'
            style={{
              background:
                'linear-gradient(180deg, rgba(73, 73, 73, 0) 34.38%, #050505)',
            }}
          ></div>
          </div>

        </Link>
        <button className={'absolute top-[35%] right-[2%] z-40 block cursor-pointer rounded-full bg-black/20 p-2 sm:p-1 text-2xl lg:text-base sm:text-sm text-white duration-500'}>
          <HiChevronRight onClick={goToNextSlide} />
        </button>
        <button className='absolute top-[35%] left-[2%] z-40 block  cursor-pointer rounded-full bg-black/20 p-2 sm:p-1 text-2xl lg:text-base sm:text-sm text-white duration-500'>
          <HiChevronLeft onClick={goToPrevSlide} />
        </button>
    </div>
    )
  );
};

export default ImportantNewsSlider;
