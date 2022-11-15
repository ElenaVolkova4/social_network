import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import state from "../src/redux/state";
import { rerenderEntireTree } from "./render";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App state={state} addPost={addPost} />
//     </BrowserRouter>
//   </React.StrictMode>
// );

rerenderEntireTree(state);
