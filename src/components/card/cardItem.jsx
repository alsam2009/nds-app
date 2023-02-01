import React from "react";

const CardItem = ({ data }) => {
  return (
    <>
      <ul className="flex flex-wrap">
        {data &&
          data.map((item, i) => (
            <li key={i}>
              <a href={item.article_url} target="_blank" rel="noreferrer">
                <div className="h-[416px] w-[310px] max-w-xs bg-white px-0 shadow-md mr-3 mt-3 flex flex-col">
                  <div className="">
                    <img
                      className="w-[100%] h-[220px] object-cover"
                      src={item.image_url}
                      alt={item.title}
                    />
                  </div>
                  <div className="grow p-[20px]">
                    <h2 className="text-lg font-medium">
                      {item.title.length > 55
                        ? item.title.substring(0, 55) + "..."
                        : item.title}
                    </h2>
                  </div>
                  <div className="mt-auto p-3">
                    <div className="flex justify-between items-center">
                      <p className="text-gray-600 text-xs">
                        {item.publication_date}
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

export default CardItem;
