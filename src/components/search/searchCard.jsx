import React from "react";
import { Link } from "react-router-dom";
import tagIcon from "../../images/tag-icon.svg";

import { formatDate, getColorTag, truncateSentence } from "../tools/tools";

const SearchCard = ({ data }) => {
  return (
    <ul className="">
      {data &&
        data.map((item, i) => (
          <li key={i}>
            <Link to={`/card/${item.id}`}>
              <div className="dark:bg-base-400 max-w-full bg-base-100 px-0 shadow-md mr-3 mt-3 flex ">
                <div className="relative">
                  <div
                    className={
                      `absolute top-0 left-[20px] flex items-center p-1.5 ` +
                      getColorTag(item.tag_article)
                    }
                  >
                    <div className="pr-1.5">
                      <img src={tagIcon} alt="tag-icon" />
                    </div>
                    <div
                      className={
                        ` text-white text-xs ` + getColorTag(item.tag_article)
                      }
                    >
                      {item.tag_article.toUpperCase()}
                    </div>
                  </div>
                  <img
                    className="w-[150px] h-[150px] object-cover"
                    src={item.image_url}
                    alt={item.title}
                  />
                </div>
                <div className="grow p-[20px]">
                  <h2 className="underline text-lg font-medium dark:text-base-100">
                    {truncateSentence(item.title)}
                  </h2>
                  <p className="my-2 text-base-400">
                    {truncateSentence(item.article_preview, 100)}
                  </p>
                </div>
                <div className="mt-auto p-3">
                  <div className="flex justify-between items-center">
                    <p className="dark:text-base-100 underline text-base-400 text-xs">
                      {formatDate(item.publication_date)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default SearchCard;
