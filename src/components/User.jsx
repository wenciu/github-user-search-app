import React from "react";
import UserInfo from "./UserProfile";
import UserBio from "./UserBio";
import UserStats from "./UserStats";
import UserLinks from "./UserLinks";

function User() {
  return (
    <div className="user-info-container">
      <UserInfo />
      <UserBio />
      <UserStats />
      <UserLinks />
    </div>
  );
}

export default User;
