import React from "react";
import IconSun from "../images/icon-sun.svg";

function Top_bar() {
  return (
    <div className="top-bar">
      <div className="logo">Logo</div>
      <div className="theme-light">
        <button className="switch-btn">Light</button>
        <img src={IconSun} alt="IconSun" />
      </div>
    </div>
  );
}

export default Top_bar;
