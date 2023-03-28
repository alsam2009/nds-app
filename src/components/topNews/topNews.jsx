import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetcher } from "../tools/fetcher";
import { getRandomArray } from "../tools/tools";

const TopNews = () => {
  const [randomData, setRandomData] = useState([]);
  const [length, setLength] = useState();

  const getRandomNewsLink = (length, max) => {
    const randomNewsId = getRandomArray(length, max).reduce(
      (acc, item) => acc + item + "&id=",
      "id="
    );
    return `http://localhost:3000/data?` + randomNewsId.slice(0, -4);
  };

  useEffect(() => {
    const getData = async () => {
      const dataLength = await axios(
        `http://localhost:3000/data?_page=1&_limit=1`
      ).then((res) => res.headers["x-total-count"]);
      setLength(dataLength);

      if (length) {
        const newData = await fetcher(getRandomNewsLink(dataLength, 9));
        setRandomData(newData);
      }
    };

    getData();
  }, [length]);

  return (
    <>
      <div className="flex h-[518px] w-full flex-col bg-base-200 shadow-md dark:bg-base-500 dark:shadow-2xl">
        <div className="flex h-10 items-center justify-start border-b-2 border-base-400 bg-base-300 p-1.5 text-base-500 dark:border-none dark:bg-base-600/50 dark:text-base-300">
          <p>
            <b>ТОП </b>
          </p>
        </div>

        {randomData &&
          randomData.map((item, i) => (
            <div
              key={i}
              className="flex h-14 w-full items-center border-b-2 border-base-300 pl-1.5 text-sm leading-4 transition duration-300 hover:bg-base-400 dark:border-base-400/50 dark:text-base-300"
            >
              <span>🔊</span>
              <Link
                to={`/card/${item.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className=" cursor-pointer  pl-2"
              >
                {item.title}
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default TopNews;
