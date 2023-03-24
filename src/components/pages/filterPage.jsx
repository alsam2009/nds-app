import React, { useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import useSWRInfinite from "swr/infinite";
import Card from "../card/card";
import { fetcher } from "../tools/fetcher";
import Divider from "../divider/Divider";
import ImportantSection from "../ImportantSection/ImportantSection";

const FilterPage = ({ name, color }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const key = location.state === "tag" ? "tag_article" : "q";
  const filterQuery = searchParams.get("filter") || "";

  const getKey = (pageIndex = 1, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null; // достигнут конец

    return `http://localhost:3000/data?${key}=${encodeURIComponent(
      filterQuery
    )}&_page=${pageIndex + 1}`;
  };

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);

  const isLoadingInitialData = !data && !error; // если данные еще не получены, выводим сообщение об загрузке
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined"); // если данные загружаются, скрываем кнопку "загрузить еще"

  useEffect(() => {
    if (inView && !isLoadingMore) {
      setSize(size + 1);
    }
  }, [inView, size, isLoadingMore, setSize]);

  if (!data)
    return (
      <div className="dark:h-screen dark:bg-base-500 dark:text-base-400">
        Загрузка...
      </div>
    );

  return (
    <div className="dark:bg-base-500">
      {typeof name !== "string" && (
        <>
          <Divider name={name[0]} color={color[0]} />
          <ImportantSection />
        </>
      )}
      {typeof name === "string" ? (
        <Divider name={name} color={color} />
      ) : (
        <Divider name={name[1]} color={color[1]} />
      )}

      <ul className="container mx-auto grid grid-cols-5 gap-4 dark:bg-base-500">
        {data.map((pageData) =>
          pageData.map((item) => <Card data={item} key={item.id} />)
        )}
      </ul>
      <div className="p-10" ref={ref}></div>
    </div>
  );
};

export default FilterPage;
