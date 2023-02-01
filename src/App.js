import React from "react";
import "./App.css";
//import Search from "./components/search/search";
import NewSearch from "./components/search/newSearch";
import CardList from "./components/card/cardList";

function App() {
  return (
    <div className="container mx-auto">
      {/* <Search /> */}
      <NewSearch />
      <CardList />
    </div>
  );
}

export default App;
