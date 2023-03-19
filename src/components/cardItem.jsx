import React from "react";

const CardItem = ({ data }) => {
  return (
    <ul className="flex flex-wrap">
      {data &&
        data.map((item, i) => (
          <li key={i}>
            <a href={item.article_url} target="_blank" rel="noreferrer">
              <div className="h-96 max-w-xs bg-white px-0 rounded-lg shadow-md mr-3 mt-3 flex flex-col">
                <div className="">
                  <img
                    className="w-80 h-40 object-cover rounded-t-lg"
                    src={item.image_url}
                    alt={item.title}
                  />
                </div>
                <div className="grow p-3">
                  <h2 className="text-lg font-medium dark:text-black">
                    {item.title.length > 55
                      ? item.title.substring(0, 55) + "..."
                      : item.title}
                  </h2>
                  <p className="mt-2 text-gray-700 dark:text-black">
                    {item.article_preview.length > 50
                      ? item.article_preview.substring(0, 50) + "..."
                      : item.article_preview}
                  </p>
                </div>
                <div className="mt-auto p-3">
                  <div className="flex justify-between items-center">
                    <p className="dark:text-black">{item.tag}</p>
                    <p className="dark:text-black text-gray-600 text-xs">
                      {item.publication_date}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
    </ul>
  );
};

export default CardItem;