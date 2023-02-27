import React from "react";
import { useSearchParams } from "react-router-dom";
import useSWR from "swr";

import Card from "../card/card";
import { fetcher } from "../tools/fetcher";

const FilterPage = () => {
  const [searchParams] = useSearchParams();
  const filterQuery = searchParams.get("filter") || "";
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/data?tag_article=${encodeURIComponent(filterQuery)}`,
    fetcher
  );

  if (error) return <div>Ошибка...</div>;
  if (isLoading) return <div>Загрузка...</div>;

  return data && <Card data={data.data} />;
};

export default FilterPage;
