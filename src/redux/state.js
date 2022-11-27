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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 7,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "ADD-MESSAGE") {
      let newMessage = {
        message: this._state.dialogsPage.newMessageText,
        id: 4,
      };
      this._state.dialogsPage.messagesData.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE") {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostCreator = () => {
  return {
    type: "ADD-POST",
  };
};

export const updateNewPostCreator = (text) => {
  return {
    type: "UPDATE-NEW-POST",
    newText: text,
  };
};

// все эти методы заменены dispatch
// addPost() {
//   // debugger;
//   let newPost = {
//     id: 7,
//     message: this._state.profilePage.newPostText,
//     likeCount: 0,
//   };
//   this._state.profilePage.postsData.push(newPost);
//   this._state.profilePage.newPostText = "";
//   this._callSubscriber(this._state);
// },

// updateNewPost(newText) {
//   this._state.profilePage.newPostText = newText;
//   this._callSubscriber(this._state);
// },

// addMessage() {
//   let newMessage = {
//     message: this._state.dialogsPage.newMessageText,
//     id: 4,
//   };
//   this._state.dialogsPage.messagesData.push(newMessage);
//   this._state.dialogsPage.newMessageText = "";
//   this._callSubscriber(this._state);
// },

// updateNewMessage(newText) {
//   this._state.dialogsPage.newMessageText = newText;
//   this._callSubscriber(this._state);
// },

export default store;
