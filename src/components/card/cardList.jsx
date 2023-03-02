import axios from "axios";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Card from "./card";

const CardList = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [isLoading, setIsloading] = useState(false);

  const fetchData = async () => {
    try {
      setIsloading(true);
      const response = await axios(
        `http://localhost:3000/data?_page=${page}&_limit=10`
      );
      const newData = await response.data;
      setData((prevData) => [...prevData, ...newData]);
      setPage((prevPage) => prevPage + 1);
      setIsloading(false);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    if (inView && !isLoading) {
      fetchData();
    }
  }, [inView]);

  return (
    <div>
      <ul className="flex flex-wrap justify-between">
        {data.map((item, i) => (
          <Card data={item} key={i} />
        ))}
      </ul>
      <div className="p-10" ref={ref}></div>
    </div>
  );
};

export default CardList;
