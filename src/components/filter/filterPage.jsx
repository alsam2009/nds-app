import React from "react";
import { useSearchParams } from "react-router-dom";
import useSWR from "swr";

import Card from "../card/card";
import Divider from "../divider";
import { fetcher } from "../tools/fetcher";
import { getColorTag } from "../tools/tools";

const FilterPage = () => {
  const [searchParams] = useSearchParams();
  const filterQuery = searchParams.get("filter") || "";
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/data?tag_article=${encodeURIComponent(filterQuery)}`,
    fetcher
  );



  if (error) return <div className="dark:h-screen dark:text-base-400 dark:bg-base-500">Ошибка...</div>;
  if (isLoading) return <div className="dark:h-screen dark:text-base-400 dark:bg-base-500">Загрузка...</div>;

  return (
    <>
      <Divider name={data.data[0].tag_article} color={getColorTag(data.data[0].tag_article)} />
      <section className="flex px-8 mb-8 dark:bg-base-500">
        <Card data={data.data} />
      </section>
    </>
    )
    // } {/* data && (
      // {/*  */}

        //  */}
  // )
};

export default FilterPage;
