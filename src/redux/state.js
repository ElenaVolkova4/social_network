import { rerenderEntireTree } from "../render";

let state = {
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
};

export let addPost = () => {
  let newPost = {
    id: 7,
    message: state.profilePage.newPostText,
    likeCount: 0,
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPost = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export let addMessage = () => {
  let newMessage = {
    message: state.dialogsPage.newMessageText,
    id: 4,
  };
  state.dialogsPage.messagesData.push(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderEntireTree(state);
};

export let updateNewMessage = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
};

export default state;
