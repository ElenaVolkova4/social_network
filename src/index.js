import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import state, { subscribe } from "../src/redux/state";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { addMessage, addPost, updateNewMessage } from "./redux/state";
import { updateNewPost } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={addPost}
          updateNewPost={updateNewPost}
          addMessage={addMessage}
          updateNewMessage={updateNewMessage}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);
