import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import store from "./redux/store";//собственный стор
import store from "./redux/redux-store"; //стор редакса

import App from "./App";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          dispatch={store.dispatch.bind(store)}
          // addPost={store.addPost.bind(store)} //вызываем метод addPost не сейчас, а передае как коллбек. не от имени store, а кого-то другого (Myposts)
          // updateNewPost={store.updateNewPost.bind(store)}
          // addMessage={store.addMessage.bind(store)}
          // updateNewMessage={store.updateNewMessage.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();

  rerenderEntireTree(state);
});
