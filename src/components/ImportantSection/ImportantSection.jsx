import React from 'react'

const ImportantSection = () => {
  return (
    <section className="flex px-8 mb-8 main_block">
      <div className="flex flex-col pr-10 w-8/12 important_news">
        ВАЖНЫЕ НОВОСТИ
        {/* {<ImportantNews/>} */}
      </div>
      <div class="flex flex-col w-4/12 popular_news">
        {/* {<TopNews/>} */}
          <div
            class="flex justify-center items-center min-h-[192px] bg-base-500 text-white text-3xl mb-4"
          >
            РЕКЛАМА
        </div>
      </div>
      </section>
  )
}

export default ImportantSection