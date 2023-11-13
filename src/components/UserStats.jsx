import React from "react";

function UserStats({ data }) {
  return (
    <div className="stats">
      <div className="repos">Repos</div>
      <div className="followers">Followers</div>
      <div className="following">Following</div>
      <div className="repos2">
        {data.data ? data.data.public_repos : "no data"}
      </div>
      <div className="followers2">
        {data.data ? data.data.followers : "no data"}
      </div>
      <div className="following2">
        {data.data ? data.data.following : "no data"}
      </div>
    </div>
  );
}

export default UserStats;

// console.log(userData.data.public_repos);
// console.log(userData.data.followers);
// console.log(userData.data.following);
