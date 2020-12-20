import React, { useState } from "react";
import "./Header.css";
import Avatar from "react-avatar";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function Header(props) {
  const [notif, setNotif] = useState(props.notif);
  return (
    <div className="Header">
      <div className="HeaderLeft">
        <Avatar size="40" round={true} src={props.avatar} />
      </div>
      <div className="HeaderRight">
        <div className="icon">
          {notif ? (
            <RadioButtonCheckedIcon
              style={{ color: "#b1b3b5" }}
              onClick={() => setNotif(false)}
            />
          ) : (
            <RadioButtonUncheckedIcon
              style={{ color: "#b1b3b5" }}
              onClick={() => setNotif(true)}
            />
          )}
        </div>
        <div className="icon">
          <ChatIcon style={{ color: "#b1b3b5" }} />
        </div>
        <div className="icon">
          <MoreVertIcon style={{ color: "#b1b3b5" }} />
        </div>
      </div>
    </div>
  );
}
