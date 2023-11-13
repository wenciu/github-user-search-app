import React from "react";
import Avatar from "../images/octocat.jpg";

function UserProfile({ data }) {
  // const date = data.data.created_at.toLocaleDateString();
  // console.log(date);

  // const dateFormat = data.created_at.toLocaleDateString("en", {
  //   year: "numeric",
  //   month: "long",
  // });

  // console.log(dateFormat);

  return (
    <div className="profile-info">
      <div className="profile-logo">
        <img src={data.data ? data.data.avatar_url : null} alt="avatar_img" />
      </div>
      <div className="profile-items">
        <div className="name">{data.data ? data.data.name : ""}</div>
        <div className="nick">@{data.data ? data.data.login : ""}</div>
        <div className="joined">
          {data.data ? data.data.created_at : "nothing"}
        </div>
        {/* Joined 25 Jan 2011 */}
      </div>
    </div>
  );
}

export default UserProfile;
// userData.data.name

// console.log(userData.data.avatar_url);
// console.log(userData.data.name);
// console.log(userData.data.login);

// console.log(userData.data.created_at);

// console.log(userData.data.bio);

// console.log(userData.data.public_repos);
// console.log(userData.data.followers);
// console.log(userData.data.following);

// console.log(userData.data.location);
// console.log(userData.data.blog);
// console.log(userData.data.twitter_username);
// console.log(userData.data.url);
