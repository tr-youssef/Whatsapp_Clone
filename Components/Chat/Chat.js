import React, { useEffect, useRef } from "react";
import "./Chat.css";
import Message from "../Message/Message";

export default function Chat(props) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };

  useEffect(scrollToBottom, [props]);

  return (
    <div className="ChatBody">
      <Message me="false" user="User" message="Message" date="22:45" />
      <Message me="true" user="" message="Message" date="22:45" />
      <Message me="false" user="User" message="Message" date="22:45" />
      <Message me="true" user="" message="Message" date="22:45" />
      <Message me="false" user="User" message="Message" date="22:45" />
      <Message me="true" user="" message="Message" date="22:45" />
      <Message me="false" user="User" message="Message" date="22:45" />
      <Message me="true" user="" message="Message" date="22:45" />
      <Message me="false" user="User" message="Message" date="22:45" />
      <Message me="true" user="" message="Message" date="22:45" />
      <Message me="false" user="User" message="Message" date="22:45" />
      <Message me="true" user="" message="Message" date="22:45" />
      <Message me="false" user="User" message="Message" date="22:45" />
      <Message me="true" user="" message="Message" date="22:45" />
      <Message me="false" user="User" message="Message" date="22:45" />
      <Message me="true" user="" message="Message" date="22:45" />
      <div ref={messagesEndRef} />
    </div>
  );
}
