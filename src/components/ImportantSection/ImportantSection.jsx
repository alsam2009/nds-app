import React, { useState, useEffect } from 'react';
import '../../App.css';

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
        .get('http://localhost:3000/data?tag_article=Важное', {
          params: {
            _page: 1,
            _limit: 9,
          },
        })
        .then((res) => {
          setImportantNewsSliderArray(res.data.splice(0, 5));
          setimportantNewsSmallArray(res.data);
        });
    };
    getData();
  }, []);
  return (
    <section className='main_block flex px-8'>
      <div className='important_news flex w-8/12 flex-col pr-10 dark:text-base-300 relative'>
        <ImportantNewsSlider data={importantNewsSliderArray} />
        <ImportantNewsSmall data={importantNewsSmallArray} />
      </div>
      <div className='popular_news flex w-4/12 flex-col'>
        <Advertisement />
        <TopNews />
      </div>
    </section>
  );
};

export default ImportantSection;
