import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

let postsData = [
  {
    message: "Hello everybody",
    likeCount: "12",
    id: "1",
  },
  {
    message: "I'm back",
    likeCount: "8",
    id: "2",
  },
];

let dialogsData = [
  {
    name: "Катя",
    id: "1",
  },
  {
    name: "Варя",
    id: "2",
  },
  {
    name: "Костя",
    id: "3",
  },
  {
    name: "Ника",
    id: "4",
  },
  {
    name: "Света",
    id: "5",
  },
];

let messagesData = [
  {
    message: "Hi",
    id: "1",
  },
  {
    message: "How are you?",
    id: "2",
  },
  {
    message: "Yo",
    id: "3",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        postsData={postsData}
        dialogsData={dialogsData}
        messagesData={messagesData}
      />
    </BrowserRouter>
  </React.StrictMode>
);
