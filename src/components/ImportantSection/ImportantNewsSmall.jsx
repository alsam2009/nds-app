import React, { memo } from "react";
import CardsSmall from "../card/CardsSmall";

const ImportantNewsSmall = memo(({ data }) => {
  return (
    <div className="flex w-[855px] justify-between gap-x-2 pr-10">
      {data && data.map((card) => <CardsSmall data={card} key={card.id} />)}
    </div>
  );
});

export default ImportantNewsSmall;
