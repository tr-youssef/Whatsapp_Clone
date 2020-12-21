import React from "react";
import "./ListChat.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Discussion from "../Discussion/Discussion";

const semaine = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi"
];

export default function ListChat(props) {
  return (
    <List
      className="List"
      style={{
        maxHeight: "calc(100vh - 109px)",
        overflow: "auto",
        objectFit: "cover"
      }}
    >
      {props.DataDiscussion.sort(function (b, a) {
        return new Date(a.timeStamp) - new Date(b.timeStamp);
      }).map((item, i) => (
        <ListItem alignItems="flex-start" className="ListItem" key={item._id}>
          <Discussion
            title={item.name}
            lastMessage={item.lastMessage}
            avatar={"https://i.pravatar.cc/150?img=" + i}
            date={
              Math.abs(new Date(item.timeStamp) - Date.now()) >= 604800000
                ? new Intl.DateTimeFormat("fr-FR").format(
                    new Date(item.timeStamp)
                  )
                : Math.abs(new Date(item.timeStamp) - Date.now()) >= 86400000
                ? semaine[new Date(item.timeStamp).getDay()]
                : new Date(item.timeStamp).getHours() +
                  ":" +
                  new Date(item.timeStamp).getMinutes()
            }
          />
        </ListItem>
      ))}

      <Divider variant="inset" component="li" />
    </List>
  );
}
