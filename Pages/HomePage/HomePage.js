import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./HomePage.css";
import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import ListChat from "../../Components/ListChat/ListChat";
import HeaderChat from "../../Components/HeaderChat/HeaderChat";
import Chat from "../../Components/Chat/Chat";

export default function HomePage() {
  const [data, setData] = useState({ discussions: [] });
  const [filter, setFilter] = useState("");

  const fetchData = useCallback(() => {
    axios({
      method: "GET",
      url: "https://o58jg.sse.codesandbox.io/v1/discussion/all",
      headers: {
        "content-type": "application/json"
      }
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const changeFilter = (e) => {
    setFilter(e);
  };

  return (
    <div className="HomePage">
      <div className="LeftSide">
        <Header
          avatar={
            "https://secure.gravatar.com/avatar/8c5d4c4b9ef6c68c4ff91c319d4c56be?d=404&s=100"
          }
          notif={true}
        />
        <SearchBar changeFilter={changeFilter} />
        {Array.isArray(data.discussions) && data.discussions.length !== 0 && (
          <ListChat
            DataDiscussion={data.discussions.filter((d) =>
              d.name.toLowerCase().includes(filter.toLowerCase())
            )}
          />
        )}
      </div>
      <div className="RightSide">
        <HeaderChat
          name="Test"
          avatar={
            "https://secure.gravatar.com/avatar/8c5d4c4b9ef6c68c4ff91c319d4c56be?d=404&s=100"
          }
        />
        <Chat />
      </div>
    </div>
  );
}
