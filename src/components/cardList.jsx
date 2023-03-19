import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "./cardItem";
import AdditionalBar from "./additional"
import CurrencyInfo from "./menu/currencyInfo";

const CardList = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      data.length < totalCount
    ) {
      setFetching(true);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler, totalCount]);

  useEffect(() => {
    if (fetching) {
      axios
        .get(`http://localhost:3000/data?_page=${currentPage}&_limit=16`)
        .then((res) => {
          setData([...data, ...res.data]);
          setCurrentPage((prevState) => prevState + 1);
          setTotalCount(res.headers["x-total-count"]);
        })
        .finally(() => setFetching(false));
    }
  }, [currentPage, data, fetching]);
  return (
    <>
      <CurrencyInfo />
      <AdditionalBar/>
      <CardItem data={data} />
    </>
  );
};

export default CardList;