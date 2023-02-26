import React from "react";
import { Link } from "react-router-dom";

import useTagsData from "../hooks/usetagsData";

const Filter = () => {
  const tags = useTagsData();

  return (
    <>
      {tags &&
        Object.values(tags).map((item, i) => (
          <Link
            className="block hover:-gray-300 px-4 py-2 font-normal hover:bg-gray-900 hover:transition mr-2"
            key={i}
            to={`/filter?filter=${item}`}
          >
            {item}
          </Link>
        ))}
    </>
  );
};

export default Filter;
