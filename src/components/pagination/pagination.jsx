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
        className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Пред
      </button>
      <ul className="inline-flex -space-x-px">
        {pageNumbers.map((number) => (
          <li className="" key={number}>
            <button
              onClick={() => paginate(number)}
              className={
                "px-3 py-2 leading-tight  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" +
                (number === currentPage
                  ? " bg-slate-400 text-white"
                  : "bg-white text-gray-500")
              }
            >
              {number}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={nextPage}
        className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        След
      </button>
    </nav>
  );
}

export default Pagination;
