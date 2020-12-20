import React, { useState } from "react";
import "./Discussion.css";
import Avatar from "react-avatar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function Discussion(props) {
  const [discussionHover, setdiscussionHover] = useState(false);
  return (
    <div
      className="Discussion"
      onMouseEnter={() => setdiscussionHover(true)}
      onMouseLeave={() => setdiscussionHover(false)}
    >
      <div className="LeftDiscussion">
        <Avatar size="49" round={true} src={props.avatar} />
      </div>
      <div className="RightDiscussion">
        <div className="RightDiscussionTop">
          <div className="RightDiscussionTopLeft">{props.title}</div>
          <div className="RightDiscussionTopRight">{props.date}</div>
        </div>
        <div className="RightDiscussionBas">
          <div className="RightDiscussionBasLeft">{props.lastMessage}‬</div>
          <div className="RightDiscussionBasRight">
            {discussionHover ? (
              <ExpandMoreIcon style={{ color: "#828689" }} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
