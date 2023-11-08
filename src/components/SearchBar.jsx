import { useState } from "react";
import SearchIcon from "../images/icon-search.svg";

function Search_bar() {
  const [input, setInput] = useState("");

  // const handleChange = event => {
  //   setMessage(event.target.value);

  //   console.log('value is:', event.target.value);
  // };

  const getInputValue = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar-items">
        <img className="SearchIcon" src={SearchIcon} alt="SearchIcon" />
        <input
          onChange={getInputValue}
          type="text"
          placeholder="Search GitHub username..."
        />
        <button className="search-btn">Search</button>
        {/* <h4>Input text:{input}</h4> */}
      </div>
    </div>
  );
}

export default Search_bar;
