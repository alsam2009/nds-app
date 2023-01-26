import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "./cardItem";

const CardList = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3000/data");
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <>
      <CardItem data={data} />
    </>
  );
};

export default CardList;
