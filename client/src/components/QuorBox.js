import { Avatar } from "@material-ui/core";
import React from "react";
import "./QuoraBox.css";

export default function QuorBox(props) {
  const user = props.user;
  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar
          src="https://img.icons8.com/cotton/2x/user-male.png"
          className="quoraBox__infoAvatar"
        />
        <h5>{user.email}</h5>
      </div>
      <div className="quoraBox__quora">
        <p>What is your question or link?</p>
      </div>
    </div>
  );
}
