import { useState } from "react";
import SearchIcon from "../images/icon-search.svg";
import User from "../components/User";
import axios from "axios";

function SearchBar() {
  const [githubUser, setGithubUser] = useState("");
  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    // console.log(githubUser);

    try {
      const result = await axios(`https://api.github.com/users/${githubUser}`);

      setUserData(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="search-bar-container">
        <div className="search-bar-items">
          <img className="SearchIcon" src={SearchIcon} alt="SearchIcon" />
          <input
            type="text"
            placeholder="Search GitHub username..."
            value={githubUser}
            onChange={(e) => setGithubUser(e.target.value)}
          />
          <button className="search-btn" onClick={fetchData}>
            Search
          </button>
        </div>
      </div>
      <User data={userData} />
    </>
  );
}

export default SearchBar;
