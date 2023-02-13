import React, { useState } from "react";
import "./App.css";
import DataContex from "./components/dataContex";
//import CardList from "./components/card/cardList";
import Main from "./components/main";
import Menu from "./components/menu/menu";

function App() {
  const [globalData, setGlobalData] = useState(null);

  return (
    <>
      <DataContex.Provider value={{ globalData, setGlobalData }}>
        <Menu />
        <Main />
      </DataContex.Provider>
    </>
  );
}

export default App;
