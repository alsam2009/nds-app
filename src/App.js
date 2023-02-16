import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
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
        <Routes>
          <Route path="/" exact element={<Main />} />
        </Routes>
        {/* <Main /> */}
      </DataContex.Provider>
    </>
  );
}

export default App;
