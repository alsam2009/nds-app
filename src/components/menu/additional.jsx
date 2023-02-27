import React, { useState } from "react";

const AdditionalBar = () => {
  const [theme, setTheme] = useState(true);

  const element = document.documentElement;
  const handleThemeSwitch = () => {
    setTheme((prevDarkMode) => !prevDarkMode);
    theme === true
      ? element.classList.add("dark")
      : element.classList.remove("dark");
  };
  return (
    <div className="flex dark:bg-base-500 justify-between bg-base-500 w-full h-8 px-4 items-center additional-info">

      <div className="w-full text-center text-white">
        <span className="font-extrabold text-xl tracking-widest cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          ВСЕ ПРО ДРОНЫ
        </span>
      </div>
      <label className="w-9 relative inline-flex cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={handleThemeSwitch}
        />
        <div className="w-9 h-[18px] bg-base-100 rounded-full items-center peer dark:peer-focus:ring-color-550 peer-checked:after:translate-x-full peer-checked:after:border-white  after:absolute after:left-[2px] after:bg-base-300 dark:after:bg-base-500 after:border-base-600 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-base-400"></div>
      </label>
      <div className="w-10"></div>
    </div>
  );
};

export default AdditionalBar;
