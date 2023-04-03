import React, {memo} from 'react'

const Advertisement = () => {
  return (
    <div className='mb-4 flex flex-col min-h-[192px] items-center justify-center bg-base-600 dark:bg-base-600/50 text-3xl text-white advertisment'>
          <span className="mt-4 text-4xl font-bold bg-gradient-to-r from-color-690 via-amber-400 to-color-890 bg-clip-text text-transparent">WANNA NEWS SITE?</span>
          <span className="my-4 text-3xl font-bold text-base-300 underline tracking-wide">CALL! +7 999 99 99</span>
          <span className='cursor-pointer bg-gradient-to-r from-color-690 to-color-890 bg-clip-text text-lg font-extrabold tracking-widest text-transparent'>
         {"{"} NEWS DELIVERY SYSTEM {"}"}
        </span>
    </div>
  )
}

export default memo(Advertisement)