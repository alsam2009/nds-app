import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetcher } from "../tools/fetcher";

const TopNews = () => {
  const [randomData, setRandomData] = useState();

  useEffect(() => {
    const generateArray = (length, max) => {
      const numbers = [...Array(length)];
      const newNumbers = numbers.map(
        () => "id=" + Math.round(Math.random() * max) + "&"
      );
      newNumbers.unshift(`http://localhost:3000/data?`);

      return newNumbers.join("").slice(0, -1);
    };
    const getData = async () => {
      const dataLength = await axios(
        `http://localhost:3000/data?_page=1&_limit=1`
      ).then((res) => res.headers["x-total-count"]);
      const newData = await fetcher(generateArray(7, dataLength));

      setRandomData(newData);
    };
    getData();
  }, []);

  return (
    <>
      <div className="flex w-full flex-col  bg-base-200 shadow-md">
        <div className="flex h-10 items-center justify-start border-b-2 border-base-400 bg-base-300 p-1.5 text-base-500">
          <p>
            <b>ТОП </b>
          </p>
        </div>

        {randomData &&
          randomData.map((item, i) => (
            <div
              key={i}
              className="flex border-b-2 border-base-300 p-1.5 text-sm underline"
            >
              <Link
                to={`/card/${item.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className=" cursor-pointer truncate "
              >
                {item.title}
              </Link>
              <span>&rarr;</span>
            </div>
          ))}
      </div>
    </>
  );
};

export default TopNews;
