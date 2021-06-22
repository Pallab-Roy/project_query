import React from "react";
// import QuorBox from "./QuorBox";
import "./Feed.css";
import Post from "./Post";

function Feed(props) {
  console.log(props.user)
  return (
    <div className="feed">
      <Post />
    </div>
  );
}

export default Feed;
