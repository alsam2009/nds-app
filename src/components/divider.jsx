import React from 'react'
import { borderColor } from './tools/tools';

const Divider = ({ name, color }) => {
  // console.log(color)
  // FIX: очень много рендеров в консоле
  let bgColor;
  let getBorderColor;

  if (typeof color === 'string') {
    bgColor = color;
    getBorderColor = borderColor(color);
  } else {
    const colorName = Object.values(color)[0].slice(3).trim()
    bgColor = colorName
    getBorderColor = borderColor(colorName)
  };
  return (
    <>
      <div className='dark:bg-base-500 pt-5 pb-8'>
        <div className={`w-auto h-6 mx-8 border-b-2 dark:bg-base-500 items-center text-base-200  divider ` +     getBorderColor}>
          <span className={`px-2 py-0.5 bg-${bgColor}`}>{name}</span>
        </div>
      </div>
    </>
  )
}

export default Divider