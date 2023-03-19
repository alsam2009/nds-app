import React from "react";
import { Link } from "react-router-dom";

import tagIcon from "../../images/tag-icon.svg";

import { formatDate, getColorTag, truncateSentence } from "../tools/tools";

const Card = ({ data }) => {
  const { id, title, publication_date, tag_article, image_url } = data;
  const { baseClass, otherClass } = getColorTag(tag_article);

  return (
    <Link to={`/card/${id}`}>
      <div className="dark:bg-base-400 h-[416px]  max-w-xs bg-base-100 px-0 shadow-md flex flex-col">
        <div className="relative">
          <div
            className={
              `absolute top-0 left-[20px] flex items-center ` + baseClass
            }
          >
            <div className={otherClass + " p-1.5"}>
              <img src={tagIcon} alt="tag-icon" />
            </div>
            <div className="text-white text-xs p-1.5 leading-none">
              {tag_article.toUpperCase()}
            </div>
          </div>
          <img
            className="w-[100%] h-[220px] object-cover"
            src={image_url}
            alt={title}
          />
        </div>
        <div className="grow p-[20px]">
          <h2 className="underline text-lg font-medium dark:text-white">
            {truncateSentence(title)}
          </h2>
        </div>
        <div className="mt-auto p-3">
          <div className="flex justify-between items-center">
            <p className="dark:text-white text-base-400 text-xs">
              {formatDate(publication_date)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
