import React, { useState, useEffect } from "react";

const CurrencyInfo = () => {
  const apiCurrencyURL = `https://www.cbr-xml-daily.ru/daily_json.js`
  const [dollarData, setDollarData] = useState()
  const [euroData, setEuroData] = useState()

  useEffect(() => {
    fetch(apiCurrencyURL)
      .then((res) => res.json())
      .then((data) => {
        const currency = data.Valute
        setDollarData(currency.USD)
        setEuroData(currency.EUR)
      })
  }, [apiCurrencyURL])

  if (!dollarData) return null
  // console.log(dollarData, euroData)
  return (
    <div className='flex justify-end w-full gap-2 text-center'>
      <div className='text-base-300 dark:text-white'>
        <span className='text-color-350'>${' '}</span>
        {dollarData.Value.toFixed(2).replace('.', ',')}
        {dollarData && dollarData.Value > dollarData.Previous ? (
          <span className='text-color-550'>
            {' '}▲
          </span>
        ) : (
          <span className='text-color-150'> ▼</span>
        )}
      </div>
      <div className='text-base-300 dark:text-white'>
        <span className='text-color-350'>€{' '}</span>
        {euroData.Value.toFixed(2).replace('.', ',')}
        {euroData && euroData.Value > euroData.Previous ? (
          <span className='text-color-550'>
            {' '}▲
          </span>
        ) : (
          <span className='text-color-150'> ▼</span>
        )}
      </div>
    </div>
  );
};

export default CurrencyInfo;
