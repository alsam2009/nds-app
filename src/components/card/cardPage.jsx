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
        <div className="m-2 text-xl">
          <h2>{data.data.title}</h2>
        </div>
        <div className="w-[40%]">
          <img src={data.data.image_url} alt={data.data.title} />
        </div>
        <div className="p-2 text-slate-500">{data.data.article_preview}</div>
        <div className="p-2">
          Полную новость читайте по{" "}
          <a className="text-slate-500" href={data.data.article_url}>
            ссылке.
          </a>
        </div>
      </>
    )
  );
};

export default CardPage;
