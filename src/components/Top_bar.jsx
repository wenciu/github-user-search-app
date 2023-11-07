import React from "react";
import DevFinder from "../images/logo-white-fill.svg";
import IconSun from "../images/icon-sun.svg";

function Top_bar() {
  return (
    <div className="top-bar">
      
      <img className="logo"src={DevFinder} alt="DevFinder logo" />
      
      <div className="theme-light">
        <button className="switch-btn">Light</button>
        <img src={IconSun} alt="IconSun" />
      </div>
    </div>
  );
}

export default Top_bar;
