import React from "react";
import DevFinder from "../images/logo-white-fill.svg";
import IconSun from "../images/icon-sun.svg";

function TopBar() {
  return (
    <div className="top-bar">
      <img className="logo" src={DevFinder} alt="DevFinder logo" />

      <div className="theme-light">
        <button className="switch-btn">LIGHT</button>
        <img src={IconSun} alt="IconSun" />
      </div>
    </div>
  );
}

export default TopBar;
