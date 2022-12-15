import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import store from "./redux/store";//собственный стор
import store from "./redux/redux-store"; //стор редакса

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import StoreContext from "./StoreContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  // console.log(state);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <StoreContext.Provider value={store}>
          <App
            state={state}
            dispatch={store.dispatch.bind(store)}
            store={store}
          />
        </StoreContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState(); //передаем новый измененный стор

  rerenderEntireTree(state);
});
