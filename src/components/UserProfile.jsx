import React from "react";
import Avatar from "../images/octocat.jpg";

function UserProfile() {
  return (
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
  );
}

export default UserProfile;
