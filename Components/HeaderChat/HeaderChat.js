import React, { useState } from "react";
import "./HeaderChat.css";
import Avatar from "react-avatar";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function HeaderChat(props) {
  return (
    <div className="Header">
      <div className="HeaderLeft">
        <Avatar size="40" round={true} src={props.avatar} />
        <div className="Title">{props.name}</div>
      </div>
      <div className="HeaderRight">
        <div className="icon">
          <SearchIcon style={{ color: "#b1b3b5" }} />
        </div>
        <div className="icon">
          <MoreVertIcon style={{ color: "#b1b3b5" }} />
        </div>
      </div>
    </div>
  );
}
