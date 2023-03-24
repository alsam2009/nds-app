import React, { useState, useEffect } from 'react';
import CurrencyInfo from './СurrencyInfo';
import Logo from '../../images/logo.png'

const AdditionalBar = () => {
  function useDarkMode() {
    const [theme, setTheme] = useState(
      typeof window !== 'undefined' ? localStorage.theme : 'dark'
    );
    const colorTheme = theme === 'dark' ? 'light' : 'dark';
    useEffect(() => {
      const element = document.documentElement;
      element.classList.remove(colorTheme);
      element.classList.add(theme);

      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', theme);
      }
    }, [colorTheme, theme]);
    return [colorTheme, setTheme];
  }
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className='additional-info flex h-8 w-full items-center justify-between bg-base-500 pl-8'>
      <div className='flex items-center w-60 text-base-300 '>
        <img src={Logo} className="w-6 h-6 mr-1" alt="logo" />
        <p className='bg-gradient-to-r from-color-690 to-color-890 bg-clip-text text-lg font-bold text-transparent'>
          NDS
        </p>
      </div>
      <div className='w-full text-center text-white'>
        <span className='cursor-pointer bg-gradient-to-r from-color-690 to-color-890 bg-clip-text text-xl font-extrabold tracking-widest text-transparent'>
          ВСЕ ПРО ДРОНЫ
        </span>
      </div>

      <div className='flex w-72 items-center dark:bg-base-500'>
        <button className='text-sm'>
          {colorTheme === 'light' ? (
            <svg
              onClick={() => setTheme('light')}
              width='80px'
              height='80px'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              stroke='currentColor'
              strokeWidth='1'
              strokeLinecap='round'
              strokeLinejoin='miter'
              className='h-5 w-5 cursor-pointer text-base-100 hover:text-color-150'
            >
              <circle
                cx='12'
                cy='12'
                r='4'
                opacity='0.1'
                strokeWidth='0'
              ></circle>
              <circle cx='12' cy='12' r='4'></circle>
              <line x1='12' y1='2' x2='12' y2='4'></line>
              <line fill='currentColor' x1='12' y1='20' x2='12' y2='22'></line>
              <line x1='22' y1='12' x2='20' y2='12'></line>
              <line x1='4' y1='12' x2='2' y2='12'></line>
              <line x1='19.07' y1='19.07' x2='17.66' y2='17.66'></line>
              <line x1='6.34' y1='6.34' x2='4.93' y2='4.93'></line>
              <line x1='4.93' y1='19.07' x2='6.34' y2='17.66'></line>
              <line x1='17.66' y1='6.34' x2='19.07' y2='4.93'></line>
            </svg>
          ) : (
            <svg
              onClick={() => setTheme('dark')}
              width='80px'
              height='80px'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 cursor-pointer text-base-100 hover:text-color-150'
              fill='currentColor'
            >
              <path
                d='M20.8667 15.3164C20.9187 15.1983 20.8006 15.0785 20.6792 15.1223V15.1223C17.3165 16.3368 13.4497 15.6201 10.9124 13.0837C8.38689 10.5592 7.66861 6.7169 8.86147 3.36559V3.36559C8.91069 3.22729 8.77418 3.09296 8.64021 3.15299C8.63117 3.15704 8.62214 3.16111 8.61311 3.16518C6.75765 4.00313 5.10654 5.4166 4.13683 7.19736C3.1002 9.10101 2.75831 11.3058 3.16975 13.4339C3.58119 15.5619 4.72034 17.4806 6.39193 18.861C8.06352 20.2414 10.1634 20.9977 12.3317 21C14.1962 21.0001 16.0181 20.4424 17.5629 19.3987C18.9891 18.4352 20.1189 16.9756 20.8311 15.3962C20.8431 15.3697 20.8549 15.343 20.8667 15.3164Z'
                stroke='#323232'
                strokeWidth='0'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          )}
        </button>
        <CurrencyInfo />
      </div>
      <div className='w-10'></div>
    </div>
  );
};

export default AdditionalBar;
