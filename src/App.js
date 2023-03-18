import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NonFoundPage from "./components/pages/404";
import CardPage from "./components/pages/cardPage";
import FilterPage from "./components/pages/filterPage";
import AdditionalBar from "./components/menu/additional";
import Menu from "./components/menu/menu";

function App() {
  return (
    <>
      <AdditionalBar />
      <Menu />
      <Routes>
        <Route path="/" exact element={<FilterPage />} />
        <Route path="/card/:id" element={<CardPage />} />
        <Route path="/important/" element={<FilterPage />} />
        <Route path="/novelty/" element={<FilterPage />} />
        <Route path="/survey/" element={<FilterPage />} />
        <Route path="/interesting/" element={<FilterPage />} />
        <Route path="/events/" element={<FilterPage />} />
        <Route path="/search/" element={<FilterPage />} />
        <Route path="*" element={<NonFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
