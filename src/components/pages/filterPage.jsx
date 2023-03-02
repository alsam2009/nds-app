import React from "react";
import { useSearchParams } from "react-router-dom";
import useSWR from "swr";

import Card from "../card/card";
import LoaderContent from "../loaderContent/loaderContent";
import { fetcher } from "../tools/fetcher";

const FilterPage = () => {
  const [searchParams] = useSearchParams();
  const filterQuery = searchParams.get("filter") || "";
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/data?tag_article=${encodeURIComponent(filterQuery)}`,
    fetcher
  );

  if (error) return <div>Ошибка...</div>;
  if (isLoading) return <LoaderContent />;

  return (
    data && (
      <ul className="flex flex-wrap justify-between">
        {data.data.map((item, i) => (
          <Card data={item} key={i} />
        ))}
      </ul>
    )
  );
};

export default FilterPage;
