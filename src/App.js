import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardPage from "./components/card/cardPage";
import DataContex from "./components/dataContex";
//import CardList from "./components/card/cardList";
import Main from "./components/main";
import AdditionalBar from "./components/menu/additional";
import Menu from "./components/menu/menu";

function App() {
  const [globalData, setGlobalData] = useState(null);

  return (
    <>
      <DataContex.Provider value={{ globalData, setGlobalData }}>
        <AdditionalBar />
        <Menu />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/card/:id" element={<CardPage />} />
        </Routes>
        {/* <Main /> */}
      </DataContex.Provider>
    </>
  );
}

export default App;
