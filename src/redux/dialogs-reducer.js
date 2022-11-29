const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        message: state.newMessageText,
        id: 4,
      };
      state.messagesData.push(newMessage);
      state.newMessageText = "";
      return state;

    case UPDATE_NEW_MESSAGE:
      state.newMessageText = action.newText;
      return state;

    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE,
  newText: text,
});

export default dialogsReducer;
