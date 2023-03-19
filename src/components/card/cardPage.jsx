import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../tools/fetcher";

const CardPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/data/${id}`,
    fetcher
  );

  if (error) return <div>Ошибка загрузки</div>;
  if (isLoading) return <div>Загрузка...</div>;

  return (
    data && (
      <>
        <div className="w-auto h-5 dark:bg-base-500"></div>
        <div className="w-auto h-screen dark:bg-base-500 ">
        <div className="p-3 dark:bg-base-500 text-xl dark:text-base-100">
          <h2>{data.data.title}</h2>
        </div>
        <div className="p-3 w-[500px]">
          <img src={data.data.image_url} alt={data.data.title} />
        </div>
        <div className="p-3 dark:bg-base-500 text-base-500 dark:text-base-300">{data.data.article_preview}</div>
        <div className="p-3 dark:bg-base-500 dark:text-base-400">
          Полную новость читайте по{" "}
          <a className="dark:bg-base-500 text-base-500 underline dark:text-color-100" rel="noreferrer" target="_blank" href={data.data.article_url}>
            ссылке
          </a>
          </div>
        </div>

      </>
    )
  );
};

export default CardPage;
