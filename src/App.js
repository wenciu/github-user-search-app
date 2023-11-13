import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import TopBar from "./components/TopBar";

import "./styles/App.scss";

function App() {
  return (
    <>
      <TopBar />
      <SearchBar />
    </>
  );
}

export default App;
