import React from "react";
import { Link } from "react-router-dom";
import tagIcon from "../../images/tag-icon.svg";

import { formatDate, getColorTag, truncateSentence } from "../tools/tools";

const Card = ({ data }) => {
  // console.log(data)
  return (
    // <>
      <ul className="flex flex-wrap justify-between dark:bg-base-500">
        {data &&
          data.map((item, i) => {
            const { baseClass, otherClass } = getColorTag(item.tag_article);

            return (
              <li key={i}>
                <Link to={`/card/${item.id}`}>
                  <div className="h-[416px] w-[310px] max-w-xs bg-base-100 dark:bg-base-500 px-0 shadow-md dark:shadow-2xl mr-3 mt-3 flex flex-col">
                    <div className="relative">
                      <div
                        className={
                          `absolute top-0 left-[20px] flex items-center ` +
                          baseClass
                        }
                      >
                        <div className={otherClass + " p-1.5"}>
                          <img src={tagIcon} alt="tag-icon" />
                        </div>
                        <div className="text-white text-xs leading-none p-1.5">
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
                        <p className="dark:text-white text-base-400 text-xs">
                          {formatDate(item.publication_date)}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
      </ul>
    // </>
  );
};

export default Card;
