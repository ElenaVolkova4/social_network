import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import store from "./redux/store";//собственный стор
import store from "./redux/redux-store"; //стор редакса

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

// let rerenderEntireTree = (state) => {
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
// };

// rerenderEntireTree(store.getState());

// store.subscribe(() => {
//   let state = store.getState(); //передаем новый измененный стор

//   rerenderEntireTree(state);
// });
