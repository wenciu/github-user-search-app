import React, { useState } from "react";
import DevFinder from "../images/logo-white-fill.svg";
import IconSun from "../images/icon-sun.svg";
import IconMoon from "../images/icon-moon.svg";

function TopBar() {
  const [theme, setTheme] = useState("DARK");
  const [icon, setIcon] = useState(false);

  const switchTheme = () => {
    const isThemeDark = theme === "DARK";

    //   color: "#697c9a",

    setTheme(isThemeDark ? "LIGHT" : "DARK");
    setIcon(!icon);
  };

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toogleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className="top-bar">
      <img className="logo" src={DevFinder} alt="DevFinder logo" />

      <div className="theme-switch">
        <button onClick={switchTheme} className="switch-btn">
          {theme}
          {icon ? (
            <img className="logo" src={IconSun} alt="IconSun" />
          ) : (
            <img className="logo" src={IconMoon} alt="IconMoon" />
          )}
        </button>
      </div>
    </div>
  );
}

export default TopBar;

// function App() {
//   const [isIconClicked, setIsIconClicked] = useState(false);
//   const [buttonColor, setButtonColor] = useState("#4caf50");

//   const handleClick = () => {
//       setIsIconClicked(!isIconClicked);
//       setButtonColor(isIconClicked ? "#4caf50" : "#ff0000");
//   };

//   return (
//       <div className='container'>
//           <h1>React Js Change button icon on click</h1>
//           <button onClick={handleClick} style={{ backgroundColor: buttonColor }}>
//               {isIconClicked ? <i className="mdi mdi-fullscreen-exit" /> : <i className="mdi mdi-fullscreen" />}
//           </button>
//       </div>
