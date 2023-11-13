import React from "react";
import Location from "../images/icon-location.svg";
import GitHub from "../images/icon-website.svg";
import Twitter from "../images/icon-twitter.svg";
import Company from "../images/icon-company.svg";

function UserLinks({ data }) {
  return (
    <div className="links">
      <div className="location">
        <img src={Location} alt="" />
        <p>{data.data ? data.data.location : "no data"}</p>
      </div>
      <div className="github">
        <img src={GitHub} alt="" />
        <p>{data.data ? data.data.blog : "no data"}</p>
      </div>
      <div className="twitter">
        <img src={Twitter} alt="" />
        <p>{data.data ? data.data.twitter_username : "no data"}</p>
      </div>
      <div className="company">
        <img src={Company} alt="" />
        <p>{data.data ? data.data.url : null}</p>
      </div>
    </div>
  );
}

// data.data.url

// {this.state.isReactFun ? <h1>React is fun!</h1> : <h1>React is not fun.</h1>}

export default UserLinks;

// console.log(userData.data.location);
// console.log(userData.data.blog);
// console.log(userData.data.twitter_username);
// console.log(userData.data.url);
