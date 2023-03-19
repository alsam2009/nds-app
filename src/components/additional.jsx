// import React from "react";
// import {useState} from "react";

// const AdditionalBar = (props) => {
//     const [theme, setTheme] = useState(false)
//     const element = document.documentElement
//     const darkQuery = window.matchMedia(('prefers-color=scheme: dark'))
//     function onWindowMatch () {
//     if(localStorage.theme === 'dark'|| 
//         (!('theme' in localStorage) && darkQuery.matches)
//      ) {
//         element.classList.add('dark')
//     }else {
//         element.classList.remove('dark')
//     }
//     }
//     onWindowMatch()
//     const handleThemeSwitch = () => {
//         setTheme(prevDarkMode=>!prevDarkMode)
//         // theme===true?element.classList.add('dark'):element.classList.remove('dark')
//         if(theme===true){
//             localStorage.setItem('theme','dark')
//             element.classList.add('dark')
//         }else {
//             localStorage.setItem('theme', 'light')
//             element.classList.remove('dark')
//         }
//     }
//     return (
//     <div className="flex dark:bg-violet-200 justify-between bg-gray-900 w-full h-8 px-4 items-center additional-info">
//         <label className="w-9 relative inline-flex cursor-pointer">
//             <input type="checkbox" value="" className="sr-only peer" onChange={handleThemeSwitch} checked />
//             <div className="dark:peer-checked:after:translate-x-0 w-9 h-5 dark:bg-gradient-to-r from-pink-500 to-violet-500 bg-gray-200 rounded-full items-center peer peer-focus:ring-green-300 peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600">
//             </div>
//         </label>
//         <div className="w-full text-center text-white">
//             <span className="font-extrabold text-xl tracking-widest cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">ВСЕ ПРО ДРОНЫ</span>
//         </div>
//         <div className="w-10"></div>
//     </div> )
// }


// export default AdditionalBar