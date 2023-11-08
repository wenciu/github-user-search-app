import React from "react";
import Location from "../images/icon-location.svg";
import GitHub from "../images/icon-website.svg";
import Twitter from "../images/icon-twitter.svg";
import Company from "../images/icon-company.svg";

function UserLinks() {
  return (
    <div className="links">
      <div className="location">
        <img src={Location} alt="" />
        <p>San Francisco</p>
      </div>
      <div className="github">
        <img src={GitHub} alt="" />
        <p>https://github.blog</p>
      </div>
      <div className="twitter">
        <img src={Twitter} alt="" />
        <p>Twitter</p>
      </div>
      <div className="company">
        <img src={Company} alt="" />
        <p>Home</p>
      </div>
    </div>
  );
}

export default UserLinks;
