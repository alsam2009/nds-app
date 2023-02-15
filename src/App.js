import React from "react";
import "./App.css";
import CardList from "./components/cardList";

function App() {
  return (
    <div className="container mx-auto dark:text-gray-100 dark:bg-slate-900 duration 100">
      <CardList />
    </div>
  );
}


export default App;
