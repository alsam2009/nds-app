import React, { useState, useEffect } from "react";


const CurrencyInfo = () => {
    const apiCurrencyURL = `https://www.cbr-xml-daily.ru/daily_json.js`
    const [dollarData, setDollarData] = useState(null)
    const [euroData, setEuroData] = useState(null)
    useEffect(() => {
        fetch(apiCurrencyURL)
            .then((res) => res.json())
            .then((data) => {
                const currency = data.Valute
                setDollarData(currency.USD)
                setEuroData(currency.EUR)
            })
    },[apiCurrencyURL])
    console.log(dollarData, euroData)
    // const trend = (current,previous) => {
    //     if (current > previous) return ' ▲';
    //     if (current < previous) return ' ▼';
    //     return '';
    // }
    return (
        <div className="w-full text-center flex gap-2">
            <div className="text-base-500 dark:text-white">$ {dollarData&& 
                dollarData.Value > dollarData.Previous ?
                <span className="text-green-500"> {dollarData.Value.toFixed(2).replace('.',',')}▲</span> : 
                <span className="text-red-600"> ▼</span>} ₽
             </div>
            <div className="dark:text-white">€ {euroData&&
                euroData.Value > euroData.Previous ?
                <span className="text-green-500"> {euroData.Value.toFixed(2).replace('.',',')} ▲</span> : 
                <span className="text-red-600"> ▼</span>} ₽  
            </div>
        </div>
    )
}

export default CurrencyInfo