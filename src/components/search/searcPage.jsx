import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useSWR from "swr";

import Pagination from "../pagination/pagination";
import { fetcher } from "../tools/fetcher";
import SearchCard from "./searchCard";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);

  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/data?q=${encodeURIComponent(searchQuery)}`,
    fetcher
  );

  const lastPageIndex = currentPage * pageSize;
  const firstPageIndex = lastPageIndex - pageSize;
  const currentData = data
    ? data.data.slice(firstPageIndex, lastPageIndex)
    : "";

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prevState) => prevState + 1);
  const prevPage = () => setCurrentPage((prevState) => prevState - 1);

  if (error) return <div>Ошибка загрузки</div>;
  if (isLoading) return <div>Загрузка...</div>;

  return (
    data && (
      <>
        <SearchCard data={currentData} />
        <Pagination
          pageSize={pageSize}
          totalData={data.data.length}
          currentPage={currentPage}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </>
    )
  );
};

export default SearchPage;