import React from "react";
import Avatar from "../images/octocat.jpg"
import Data_Fetch from "./Data_Fetch";



function User_info() {
  return (
    <div className="user-info-container">
      <div className="profile-info">
        <div className="profile-logo">
        <img src={Avatar} alt="" />
        </div>
        <div className="profile-items">
        <div className="name">The Octocat</div>
        <div className="nick">@octocat</div>
        <div className="joined">Joined 25 Jan 2011</div>
        </div>
      </div>
      <p className="bio">The profile has no bio</p>
      <div className="stats">
        <div className="repos">Repos</div>
        <div className="followers">Followers</div>
        <div className="following">Following</div>
        <div className="repos2">8</div>
        <div className="followers2">3938</div>
        <div className="following2">9</div>
      </div>
      <div className="links">
      <div className="location">
        <img src="" alt="" />
        San Francisco
      </div>
      <div className="github">
        <img src="" alt="" />
        https://github.blog
      </div>
      <div className="twitter">
        <img src="" alt="" />
        Twitter
      </div>
      <div className="home">
        <img src="" alt="" />
        Home
      </div>
      </div>
      
    </div>
    
  );
}

export default User_info;
