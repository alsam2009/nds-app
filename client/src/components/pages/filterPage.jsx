import React, { useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import useSWRInfinite from "swr/infinite";
import {ReactComponent as Loader } from '../../images/loader2.svg'
import { Card, Divider, ImportantSection } from "../components";
import { fetcher } from "../tools/fetcher";
import SERVER_URI from "../../api/api";

const FilterPage = ({ name, color }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const key = location.state === "tag" ? "tag_article" : "";
  const filterQuery = searchParams.get("filter") || "";

  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null; // достигнут конец
    return `${SERVER_URI}?${key}=${encodeURIComponent(
      filterQuery
    )}&_page=${pageIndex}`;
  };

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");

  useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

  useEffect(() => {
    if (inView && !isLoadingMore) {
      setSize(size + 1);
    }
  }, [inView, size, isLoadingMore, setSize]);


  if (!data)
    return (
      <div className="w-full  h-screen flex justify-center items-center dark:bg-base-500 dark:text-base-400">
        <Loader fill="rgb(48,48,48)" stroke="" width={50} />
      </div>
    );
  return (
    <div className="dark:bg-base-500">
      {typeof name !== "string" &&
        <>
          <Divider name={name[0]} color={color[0]} />
          <ImportantSection />
        </>
      }
      {typeof name === "string"
      ? <Divider name={name} color={color} />
      : <Divider name={name[1]} color={color[1]} />
      }
      <ul className="container px-8 md:px-4 grid grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 gap-4 dark:bg-base-500">
        {data.map((pageData) =>
          pageData.map((item) => <Card data={item} key={item.id} />)
        )}
      </ul>
      <div className="py-9" ref={ref}></div>
    </div>
  );
};

export default FilterPage;
