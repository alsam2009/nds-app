import React, { memo } from "react";

const Advertisement = () => {
  return (
    <div className="advertisment mb-4 flex min-h-[192px] flex-col items-center justify-center border-2 bg-base-600 text-3xl text-white dark:bg-base-600/50">
      <span className="mt-4 bg-gradient-to-r from-color-690 via-amber-400 to-color-890 bg-clip-text text-4xl font-bold text-transparent">
        WANNA NEWS SITE?
      </span>
      <span className="my-4 text-3xl font-bold tracking-wide text-base-300 underline">
        CALL! +7 999 99 99
      </span>
      <span className="cursor-pointer bg-gradient-to-r from-color-690 to-color-890 bg-clip-text text-lg font-extrabold tracking-widest text-transparent">
        {"{"} NEWS DELIVERY SYSTEM {"}"}
      </span>
    </div>
  );
};

export default memo(Advertisement);
