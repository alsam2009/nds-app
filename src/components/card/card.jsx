import React from "react";
import { Link } from "react-router-dom";
import tagIcon from "../../images/tag-icon.svg";

import { formatDate, getColorTag, truncateSentence } from "../tools/tools";

const Card = ({ data }) => {
  return (
    <>
      <ul className="flex flex-wrap justify-between">
        {data &&
          data.map((item, i) => (
            <li key={i}>
              <Link to={`/card/${item.id}`}>
                <div className="dark:bg-slate-500 h-[416px] w-[310px] max-w-xs bg-white px-0 shadow-md mr-3 mt-3 flex flex-col">
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
                      className="w-[100%] h-[220px] object-cover"
                      src={item.image_url}
                      alt={item.title}
                    />
                  </div>
                  <div className="grow p-[20px]">
                    <h2 className="underline text-lg font-medium dark:text-white">
                      {truncateSentence(item.title)}
                    </h2>
                  </div>
                  <div className="mt-auto p-3">
                    <div className="flex justify-between items-center">
                      <p className="dark:text-white underline text-slate-400 text-xs">
                        {formatDate(item.publication_date)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Card;