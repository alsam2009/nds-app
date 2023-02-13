import React from "react";
import tagIcon from "../../images/tag-icon.svg";

import { formatDate, getColorTag } from "../tools";

const Card = ({ data }) => {
  return (
    <>
      <ul className="flex flex-wrap justify-between">
        {data &&
          data.map((item, i) => (
            <li key={i}>
              <a href={item.article_url} target="_blank" rel="noreferrer">
                <div className="h-[416px] w-[310px] max-w-xs bg-white px-0 shadow-md mr-3 mt-3 flex flex-col">
                  <div className="relative">
                    <div
                      className={`absolute top-0 left-[20px] flex items-center `}
                    >
                      <div
                        className={
                          "p-1.5 " +
                          getColorTag(item.tag_article).replace(
                            getColorTag(item.tag_article),
                            getColorTag(item.tag_article).slice(0, -3) + 600
                          )
                        }
                      >
                        <img src={tagIcon} alt="tag-icon" />
                      </div>
                      <div
                        className={
                          `p-1.5 text-white text-xs ` +
                          getColorTag(item.tag_article)
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
                    <h2 className="underline text-lg font-medium">
                      {item.title.length > 55
                        ? item.title.substring(0, 55) + "..."
                        : item.title}
                    </h2>
                  </div>
                  <div className="mt-auto p-3">
                    <div className="flex justify-between items-center">
                      <p className="underline text-slate-400 text-xs">
                        {formatDate(item.publication_date)}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Card;
