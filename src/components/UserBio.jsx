import React from "react";

function UserBio({ data }) {
  // console.log(data.data.bio);

  // const noBio = "The profile has no bio";
  return (
    <p className="bio">
      {data.data ? data.data.bio : "The profile has no bio"}
    </p>
  );
}

export default UserBio;
