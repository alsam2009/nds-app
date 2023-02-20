import { useState, useEffect } from "react";

const useTagsData = () => {
  const [tags, setTagsData] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      const response = await fetch("http://localhost:3000/data");
      const data = await response.json();
      const dataArray = data.map((item) => item.tag_article);
      const dataUnic = dataArray.filter(
        (name, index) => dataArray.indexOf(name) === index
      );
      setTagsData(dataUnic);
    };
    dataFetch();
  }, []);
  return tags;
};

export default useTagsData;
