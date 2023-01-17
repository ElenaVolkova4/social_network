// import { combineReducers, createStore } from "redux";//старое
import { combineReducers, legacy_createStore as createStore } from "redux"; //новое
import authReducer from "./auth-reducer";

import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
