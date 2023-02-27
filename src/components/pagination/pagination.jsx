import React from "react";

function Pagination({
  pageSize,
  totalData,
  paginate,
  nextPage,
  prevPage,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / pageSize); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="m-3 flex justify-center">
      <button
        onClick={prevPage}
        className="px-3 py-2 ml-0 leading-tight text-base-400 bg-base-100 border border-base-300 rounded-l-lg hover:bg-base-100 hover:text-base-500 dark:bg-base-600 dark:border-bass-600 dark:text-base-400 dark:hover:bg-base-600 dark:hover:text-base-100"
      >
        Пред
      </button>
      <ul className="inline-flex -space-x-px">
        {pageNumbers.map((number) => (
          <li className="" key={number}>
            <button
              onClick={() => paginate(number)}
              className={
                "px-3 py-2 leading-tight  border border-base-300 hover:bg-base-100 hover:text-base-600 dark:bg-base-500 dark:border-base-600 dark:text-base-400 dark:hover:bg-base-600 dark:hover:text-base-100" +
                (number === currentPage
                  ? " bg-base-400 text-base-100"
                  : "bg-base-100 text-base-500")
              }
            >
              {number}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={nextPage}
        className="px-3 py-2 leading-tight text-base-400 bg-base-100 border border-base-300 rounded-r-lg hover:bg-base-100 hover:text-base-600 dark:bg-base-600 dark:border-base-600 dark:text-base-400 dark:hover:bg-base-600 dark:hover:text-base-100"
      >
        След
      </button>
    </nav>
  );
}

export default Pagination;
