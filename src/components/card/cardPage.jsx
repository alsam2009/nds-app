import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    axios(`http://localhost:3000/data/${id}`).then((res) => setData(res.data));
  }, [id]);

  return (
    data && (
      <>
        <div className="m-2 text-xl">
          <h2>{data.title}</h2>
        </div>
        <div className="w-[40%]">
          <img src={data.image_url} alt={data.title} />
        </div>
        <div className="p-2 text-slate-500">{data.article_preview}</div>
        <div className="p-2">
          Полную новость читайте по{" "}
          <a className="text-slate-500" href={data.article_url}>
            ссылке.
          </a>
        </div>
      </>
    )
  );
};

export default CardPage;
