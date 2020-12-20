import React, { useState } from "react";
import "./Message.css";

export default function Message(props) {
  return (
    <div className={props.me == "true" ? "MessageMe" : "MessageYou"}>
      <div className="User">{props.user}</div>
      {props.message}
      <div className="Date">{props.date}</div>
    </div>
  );
}
