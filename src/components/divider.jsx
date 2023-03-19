import React from 'react'

const Divider = ({ name, color }) => {

  const paramDivider = `w-auto h-6 mx-8 mb-5 border-b-2 border-${color} items-center text-base-200  divider`

  // console.log(color)
  let borderColor;
  let bgColor;

  const defineBorderColor = (color) => {
    return borderColor = color === 'color-150'
      ? 'border-color-150'
      : color === 'color-650'
        ? 'border-color-650'
        : color === 'color-800'
          ? 'border-color-800'
          : color === 'color-550'
            ? 'border-color-550'
            : 'border-color-350'
  };

  if (typeof color === 'string') {
    bgColor = color;
    borderColor = defineBorderColor(color);
  } else {
    const colorName = Object.values(color)[0].slice(3).trim()
    bgColor = colorName
    borderColor = defineBorderColor(colorName)
  };

  const spanColor = `px-2 py-0.5 bg-${bgColor}`
  const bottomBorder = `w-auto h-6 mx-8 border-b-2 dark:bg-base-500 items-center text-base-200  divider ` + borderColor
  // console.log('bottomBorder: ', bottomBorder);

  return (
    <>
      <div className='w-auto h-5 dark:bg-base-500'></div>
      <div className='dark:bg-base-500'>
        <div className={bottomBorder}>
          <span className={spanColor}>{name}</span>
        </div>
      </div>
      <div className='w-auto h-[30px] dark:bg-base-500'></div>
    </>
  )
}

export default Divider