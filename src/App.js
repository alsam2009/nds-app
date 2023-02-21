import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardPage from "./components/card/cardPage";
import DataContex from "./components/dataContex";
import FilterPage from "./components/filter/filterPage";
import Main from "./components/main";
import AdditionalBar from "./components/menu/additional";
import Menu from "./components/menu/menu";
import SearchPage from "./components/search/searcPage";

function App() {
  const [globalData, setGlobalData] = useState([]);

  return (
    <>
      <DataContex.Provider value={{ globalData, setGlobalData }}>
        <AdditionalBar />
        <Menu />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/card/:id" element={<CardPage />} />
          <Route path="/filter/" element={<FilterPage />} />
          <Route path="/search/" element={<SearchPage />} />
        </Routes>
        {/* <Main /> */}
      </DataContex.Provider>
    </>
  );
}

export default App;
