import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        {
          id: 1,
          message: "Hello everybody",
          likeCount: 12,
        },
        {
          id: 2,
          message: "I'm back",
          likeCount: 8,
        },
      ],
      newPostText: "newPostText",
    },
    dialogsPage: {
      dialogsData: [
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
      ],
      messagesData: [
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
      ],
      newMessageText: "newMessageText",
    },
    sideBar: {},
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; //наблюдатель
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
