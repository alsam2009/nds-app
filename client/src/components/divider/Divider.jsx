import React from 'react'
import { borderColor } from '../tools/tools';

const Divider = ({ name, color }) => {
  return (
    <>
      <div className='dark:bg-base-500 pt-5 pb-8 md:pt-3 md:pb-4'>
        <div className={`w-auto h-6 mx-8 md:mx-4 border-b-2 dark:bg-base-500 items-center lg:text-sm lg:leading-[1.75] text-base-200  divider ` +     borderColor(color)}>
          <span className={`px-2 py-0.5 bg-${color}`}>{name}</span>
        </div>
      </div>
    </>
  )
}

export default React.memo(Divider)