import React from "react";
import { Link } from "react-router-dom";
import tagIcon from "../../images/tag-icon.svg";
import { formatDate, getColorTag, truncateSentence } from "../tools/tools";

const Card = ({ data }) => {
  const { id, title, publication_date, tag_article, image_url } = data;
  const { baseClass, otherClass } = getColorTag(tag_article);

  return (
    <Link to={`/card/${id}`} target="_blank" rel="noopener noreferrer">
      <div className="flex h-[416px]  max-w-xs flex-col bg-base-100 px-0 shadow-md dark:bg-base-500 dark:shadow-2xl">
        <div className="relative">
          <div
            className={
              `absolute top-0 left-[20px] flex items-center ` + baseClass
            }
          >
            <div className={otherClass + " p-1.5"}>
              <img src={tagIcon} alt="tag-icon" />
            </div>
            <div className="p-1.5 text-xs leading-none text-white">
              {tag_article.toUpperCase()}
            </div>
          </div>
          <img
            className="h-[220px] w-[100%] object-cover"
            src={image_url}
            alt={title}
          />
        </div>
        <div className="grow p-[20px]">
          <h2 className="text-lg font-medium underline dark:text-base-300">
            {truncateSentence(title)}
          </h2>
        </div>
        <div className="mt-auto p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs text-base-400 dark:text-base-300">
              {formatDate(publication_date)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default React.memo(Card);
