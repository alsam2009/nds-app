import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NonFoundPage from "./components/pages/404";
import CardPage from "./components/pages/cardPage";
import FilterPage from "./components/pages/filterPage";
import AdditionalBar from "./components/AdditionalBar/AdditionalBar";
import Menu from "./components/menu/menu";

function App() {
  return (
    <>
      <AdditionalBar />
      <Menu />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <FilterPage
              name={["Важное", "Все новости"]}
              color={["color-150", "color-550"]}
            />
          }
        />
        <Route path="/card/:id" element={<CardPage />} />
        <Route
          path="/important/"
          element={<FilterPage name="Важное" color="color-150" />}
        />
        <Route
          path="/novelty/"
          element={<FilterPage name="Новинки" color="color-650" />}
        />
        <Route
          path="/survey/"
          element={<FilterPage name="Обзоры" color="color-800" />}
        />
        <Route
          path="/interesting/"
          element={<FilterPage name="Интересно" color="color-350" />}
        />
        <Route
          path="/events/"
          element={<FilterPage name="Мероприятия" color="color-550" />}
        />
        <Route
          path="/search/"
          element={<FilterPage name="Поиск" color="color-550" />}
        />
        <Route path="*" element={<NonFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
