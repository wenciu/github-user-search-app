import React from "react";
import UserProfile from "./UserProfile";
import UserBio from "./UserBio";
import UserStats from "./UserStats";
import UserLinks from "./UserLinks";

function User({ data }) {
  return (
    <div className="user-info-container">
      <UserProfile data={data} />
      <UserBio data={data} />
      <UserStats data={data} />
      <UserLinks data={data} />
    </div>
  );
}

export default User;
