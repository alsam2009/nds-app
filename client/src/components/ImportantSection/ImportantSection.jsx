import React, { useState, useEffect } from 'react';
import '../../App.css';
import SERVER_URI from '../../api/api';
import { navbar } from '../../nds.config';

import {
  TopNews,
  Advertisement,
  ImportantNewsSlider,
  ImportantNewsSmall,
} from '../components';

import axios from 'axios';
const ImportantSection = () => {
  const [importantNewsSliderArray, setImportantNewsSliderArray] = useState([]);
  const [importantNewsSmallArray, setimportantNewsSmallArray] = useState([]);

  useEffect(() => {
    const getData = async () => {
      axios
        .get(SERVER_URI + `?tag_article=${navbar[4]}`, {
          params: {
            _page: 1,
            _limit: 9,
          },
        })
        .then((res) => {
          setImportantNewsSliderArray(res.data.toSpliced(5, 4));
          setimportantNewsSmallArray(res.data.toSpliced(0, 5));
        });
    };
    getData();

  }, []);
  return ( 
    <section className='main_block flex sm:block px-8 md:px-4 sm:mb-2'>
      <div className='important_news flex w-8/12 sm:w-full sm:pr-0 flex-col pr-10 lg:pr-5 dark:text-base-300'>
        <ImportantNewsSlider data={importantNewsSliderArray} />
        <ImportantNewsSmall data={importantNewsSmallArray} />
      </div>
      <div className='popular_news flex w-4/12 sm:w-full flex-col'>
        <Advertisement />
        <TopNews />
      </div>
    </section>
  );
};

export default ImportantSection;
