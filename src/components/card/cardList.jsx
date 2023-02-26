import React, { useContext, useEffect, useState } from "react";

import DataContex from "../dataContex";
import axios from "axios";
import Card from "./card";
import LoaderContent from "../loaderContent/loaderContent";
import { scrollHandler } from "../tools/tools";

const CardList = () => {
  const { globalData, setGlobalData } = useContext(DataContex);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", (e) =>
      scrollHandler(e, globalData, totalCount, setFetching)
    );

    return function () {
      document.removeEventListener("scroll", (e) =>
        scrollHandler(e, globalData, totalCount, setFetching)
      );
    };
  }, [totalCount, globalData]);

  if (fetching) {
    axios
      .get(`http://localhost:3000/data?_page=${currentPage}&_limit=10`)
      .then((res) => {
        setGlobalData([...globalData, ...res.data]);
        setLoading(false);
        setCurrentPage((prevState) => prevState + 1);
        setTotalCount(res.headers["x-total-count"]);
      })
      .finally(() => setFetching(false));
  }

  if (loading) {
    return (
      <div className="flex gap-5">
        <LoaderContent />
        <LoaderContent />
        <LoaderContent />
        <LoaderContent />
        <LoaderContent />
      </div>
    );
  }

  return (
    <>
      {
        <section className="flex px-8 justify-between flex-wrap">
          <Card data={globalData} />
        </section>
      }
    </>
  );
};

export default CardList;
