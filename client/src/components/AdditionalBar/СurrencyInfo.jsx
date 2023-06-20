import React, { useState, useEffect } from "react";

const CurrencyInfo = () => {
  const apiCurrencyURL = `https://www.cbr-xml-daily.ru/daily_json.js`;
  const [dollarData, setDollarData] = useState();
  const [euroData, setEuroData] = useState();

  useEffect(() => {
    fetch(apiCurrencyURL)
      .then((res) => res.json())
      .then((data) => {

        const currency = data.Valute
        setDollarData(currency.USD)
        setEuroData(currency.EUR)
      })
  }, [apiCurrencyURL])

  if (!dollarData) return null;

  return (
    <div className="flex w-full justify-end gap-2 text-center items-center">
      <div className="text-base-300 leading-4 xl:text-sm sm:text-xs dark:text-white">
        <span className="text-color-350">$ </span>
        {dollarData.Value.toFixed(2).replace(".", ",")}
        {dollarData && dollarData.Value > dollarData.Previous ? (
          <span className="text-color-550 sm:hidden"> ▲</span>
        ) : (
          <span className="text-color-150 sm:hidden"> ▼</span>
        )}
      </div>
      <div className="text-base-300 leading-4 xl:text-sm sm:text-xs dark:text-white">
        <span className="text-color-350">€ </span>
        {euroData.Value.toFixed(2).replace(".", ",")}
        {euroData && euroData.Value > euroData.Previous ? (
          <span className="text-color-550 sm:hidden"> ▲</span>
        ) : (
          <span className="text-color-150 sm:hidden"> ▼</span>
        )}
      </div>
    </div>
  );
};
export default CurrencyInfo;
