import React, { useState } from "react";
import "./styles/App.scss";
import SearchBar from "./components/SearchBar";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div>
      <TopBar />
      <SearchBar />
    </div>
  );
}

export default App;
