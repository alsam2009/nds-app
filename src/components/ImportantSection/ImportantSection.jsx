import React from 'react';
import TopNews from '../topNews/topNews';

const ImportantSection = () => {
  return (
    <section className='main_block flex px-8'>
      <div className='important_news flex w-8/12 flex-col pr-10 dark:text-base-400'>
        ВАЖНЫЕ НОВОСТИ
        {/* {<ImportantNews/>} */}
      </div>
      <div className='popular_news flex w-4/12 flex-col'>
        <div className='mb-4 flex flex-col min-h-[192px] items-center justify-center bg-base-600 dark:bg-base-600/50 text-3xl text-white '>
          <span className="mt-4 text-4xl font-bold bg-gradient-to-r from-color-690 via-amber-400 to-color-890 bg-clip-text text-transparent">WANNA NEWS SITE?</span>
          <span className="my-4 text-3xl font-bold text-base-300 underline tracking-wide">CALL! +7 999 99 99</span>
          <span className='cursor-pointer bg-gradient-to-r from-color-690 to-color-890 bg-clip-text text-lg font-extrabold tracking-widest text-transparent'>
         {"{"} NEWS DELIVERY SYSTEM {"}"}
        </span>
        </div>
        <TopNews />
      </div>
    </section>
  );
};

export default ImportantSection;
