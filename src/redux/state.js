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
  },
  sideBar: {},
};

export let addPost = (post) => {
  let newPost = {
    id: 6,
    message: post,
    likeCount: 0,
  };
  state.profilePage.postsData.push(newPost);
};

export default state;
