import React, { memo } from 'react';
import CardsSmall from '../card/CardsSmall';

const ImportantNewsSmall = memo(({ data }) => {
  return (
    <div className='flex w-full justify-between gap-x-2 overflow-x-auto sm:hidden'>
      {data && data.map((card) => <CardsSmall data={card} key={card.id} />)}
    </div>
  );
});

export default ImportantNewsSmall;
