import React, { useState, useEffect } from "react";
import CurrencyInfo from "./currencyInfo";

const AdditionalBar = () => {
  // const [theme, setTheme] = useState(
  //   localStorage.getItem('theme')?localStorage.getItem('theme'):'light'
  // );

  // const element = document.documentElement;
  // const darkQuery = window.matchMedia(('prefers-color=scheme: dark'))
  //   const handleThemeSwitch = () => {
  //       setTheme(prevDarkMode=>!prevDarkMode)
  //       if(theme==='light'){
  //           localStorage.setItem('theme','dark')
  //           element.classList.add('dark')
  //       }else {
  //           localStorage.setItem('theme', 'light')
  //           element.classList.remove('dark')
  //       }
  //   }
  function useDarkMode () {
    const [theme,setTheme] = useState(
      typeof window !== 'undefined' ? localStorage.theme: 'dark'
    )
    const colorTheme = theme === 'dark' ? 'light' : 'dark'
    useEffect(() => {
        const element = document.documentElement;
        element.classList.remove(colorTheme)
        element.classList.add(theme)

        if(typeof window !== 'undefined') {
          localStorage.setItem('theme', theme)
        }
    }, [theme])
    return [colorTheme, setTheme]
  }
  const [colorTheme, setTheme] = useDarkMode()
  
  return (
    <div className="flex bg-gray-100 dark:bg-base-500 justify-between w-full h-8 px-4 items-center additional-info">

      <div className="w-full text-center text-white">
        <span className="font-extrabold text-xl tracking-widest cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          ВСЕ ПРО ДРОНЫ
        </span>
      </div>
      <CurrencyInfo />
      <div className="inline-flex bg-gray-100 hover:bg-gray-300 rounded dark:bg-base-500">
            <button className="inline-flex text-xl rounded-full m-1">
              {colorTheme === 'light' ?
              <svg
              onClick={() => setTheme('light')}
              width="80px" 
              height="80px" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="currentColor" stroke="currentColor" 
              stroke-width="1" stroke-linecap="round" 
              stroke-linejoin="miter"
              className="w-5 h-5 text-base-100 hover:text-amber-500 cursor-pointer">
                <circle cx="12" cy="12" r="4" opacity="0.1" stroke-width="0">
                </circle>
                <circle cx="12"cy="12" r="4">
                </circle><line x1="12" y1="2" x2="12" y2="4"></line>
                <line fill="currentColor" x1="12" y1="20" x2="12" y2="22"></line>
                <line x1="22" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="12" x2="2" y2="12"></line>
                <line x1="19.07" y1="19.07" x2="17.66" y2="17.66"></line>
                <line x1="6.34" y1="6.34" x2="4.93" y2="4.93"></line>
                <line x1="4.93" y1="19.07" x2="6.34" y2="17.66"></line>
                <line x1="17.66" y1="6.34" x2="19.07" y2="4.93"></line>
              </svg>
              :<svg
              onClick={() => setTheme('dark')}
              width="80px" 
              height="80px" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-base-100 hover:text-amber-500 cursor-pointer"
              fill="currentColor" stroke="currentColor"
              >
              <path d="M20.8667 15.3164C20.9187 15.1983 20.8006 15.0785 20.6792 15.1223V15.1223C17.3165 16.3368 13.4497 15.6201 10.9124 13.0837C8.38689 10.5592 7.66861 6.7169 8.86147 3.36559V3.36559C8.91069 3.22729 8.77418 3.09296 8.64021 3.15299C8.63117 3.15704 8.62214 3.16111 8.61311 3.16518C6.75765 4.00313 5.10654 5.4166 4.13683 7.19736C3.1002 9.10101 2.75831 11.3058 3.16975 13.4339C3.58119 15.5619 4.72034 17.4806 6.39193 18.861C8.06352 20.2414 10.1634 20.9977 12.3317 21C14.1962 21.0001 16.0181 20.4424 17.5629 19.3987C18.9891 18.4352 20.1189 16.9756 20.8311 15.3962C20.8431 15.3697 20.8549 15.343 20.8667 15.3164Z" 
              stroke="#323232" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"/>
              </svg>}
            {/* {colorTheme==='light' ?<ion-icon
              className="hover:bg-yellow-400" 
              name="sunny-outline"
              onClick={()=>setTheme('light')}
              >
            </ion-icon>:<ion-icon 
              name="moon-outline"
              onClick={()=>setTheme('dark')}>
            </ion-icon>} */}
          </button>  
      </div>
      {/* <label className="w-9 relative inline-flex cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={handleThemeSwitch}
        />
        <div className="w-9 h-[18px] bg-base-100 rounded-full items-center peer dark:peer-focus:ring-color-550 peer-checked:after:translate-x-full peer-checked:after:border-white  after:absolute after:left-[2px] after:bg-base-300 dark:after:bg-base-500 after:border-base-600 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-base-400"></div>
      </label> */}
      <div className="w-10"></div>
    </div>
  );
};

export default AdditionalBar;
