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
  let stateCopy = { ...state };

  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = state.newMessageText;

      return {
        ...state,
        newMessageText: "",
        messagesData: [...state.messagesData, { id: 4, message: newMessage }],
      };

    // {
    //   let newMessage = {
    //     message: state.newMessageText,
    //     id: 4,
    //   };
    //   // let stateCopy = { ...state };
    //   // stateCopy.messagesData = [...state.messagesData];
    //   stateCopy.messagesData.push(newMessage);
    //   stateCopy.newMessageText = "";
    //   return stateCopy;
    // }

    case UPDATE_NEW_MESSAGE:
      return {
        ...state,
        newMessageText: action.newText,
      };

    // {
    //   // let stateCopy = { ...state };

    //   stateCopy.newMessageText = action.newText;
    //   return stateCopy;
    // }

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
