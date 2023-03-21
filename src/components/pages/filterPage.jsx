import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import useSWRInfinite from "swr/infinite";
import Card from "../card/card";
import { fetcher } from "../tools/fetcher";

const FilterPage = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [searchParams] = useSearchParams();
  const filterQuery = searchParams.get("filter") || "";

  const getKey = (pageIndex = 1, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null; // достигнут конец

    return `http://localhost:3000/data?q=${encodeURIComponent(
      filterQuery
    )}&_page=${pageIndex + 1}&_limit=10`; // ключ SWR
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

  if (!data) return <div>Загрузка...</div>;

  return (
    <div>
      <ul className="container mx-auto grid grid-cols-5 gap-4">
        {data.map((pageData) =>
          pageData.map((item) => <Card data={item} key={item.id} />)
        )}
      </ul>
      <div className="p-10" ref={ref}></div>
    </div>
  );
};

export default FilterPage;
