import React from "react";

const NonFoundPage = () => {
  return (
    <div className="-mt-20 flex min-h-screen flex-col items-center justify-center dark:bg-base-500 dark:text-base-300">
      <h1 className="bg-gradient-to-r from-color-690 to-color-890 bg-clip-text text-8xl font-extrabold tracking-widest text-transparent">
        404
      </h1>{" "}
      <br />
      <h1>Запрашиваемая страница не найдена 🤷‍♀️</h1>
    </div>
  );
};

export default NonFoundPage;
