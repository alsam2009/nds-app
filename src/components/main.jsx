import React from "react";
import CardList from "./card/cardList";
import Divider from "./divider";

const Main = () => {
  return (
    <main className="dark:bg-base-500">
      <Divider name="Важное" color="color-150"/>
      <Divider name="Все новости" color="color-550"/>
      <CardList />
    </main>
  );
};

export default Main;
