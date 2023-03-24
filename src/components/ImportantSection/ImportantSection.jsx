import React from "react";
import TopNews from "../topNews/topNews";

const ImportantSection = () => {
  return (
    <section className="main_block mb-8 flex px-8">
      <div className="important_news flex w-8/12 flex-col pr-10">
        ВАЖНЫЕ НОВОСТИ
        {/* {<ImportantNews/>} */}
      </div>
      <div className="popular_news flex w-4/12 flex-col">
        <div className="mb-4 flex min-h-[192px] items-center justify-center bg-base-500 text-3xl text-white">
          РЕКЛАМА
        </div>
        {<TopNews />}
      </div>
    </section>
  );
};

export default ImportantSection;
