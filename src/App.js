import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NonFoundPage from "./components/404";
import CardPage from "./components/card/cardPage";
import DataContex from "./components/dataContex";
import FilterPage from "./components/filter/filterPage";
import Main from "./components/main";
import AdditionalBar from "./components/menu/additional";
import CurrencyInfo from "./components/menu/currencyInfo";
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
          <Route path="/important/" element={<FilterPage />} />
          <Route path="/novelty/" element={<FilterPage />} />
          <Route path="/survey/" element={<FilterPage />} />
          <Route path="/interesting/" element={<FilterPage />} />
          <Route path="/events/" element={<FilterPage />} />
          <Route path="/search/" element={<SearchPage />} />
          <Route path="*" element={<NonFoundPage />} />
        </Routes>
        {/* <Main /> */}
      </DataContex.Provider>
    </>
  );
}

export default App;
