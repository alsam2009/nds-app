import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetcher } from "../tools/fetcher";
import _ from "lodash";

const TopNews = () => {
  const [randomData, setRandomData] = useState([]);
  const [length, setLength] = useState();

  const generateArray = (length, max) => {
    const numbers = _.shuffle(_.range(1, length)).slice(0, max);
    const newNumbers = numbers.map((item) => "id=" + item + "&");

    return "http://localhost:3000/data?" + newNumbers.join("").slice(0, -1);
  };

  useEffect(() => {
    const getData = async () => {
      const dataLength = await axios(
        `http://localhost:3000/data?_page=1&_limit=1`
      ).then((res) => res.headers["x-total-count"]);
      setLength(dataLength);
      if (length) {
        const url = generateArray(length, 7);
        const newData = await fetcher(url);
        setRandomData(newData);
      }
    };

    getData();
  }, [length]);

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
