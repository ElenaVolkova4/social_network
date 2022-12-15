import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/dialogs-reducer.js";
import StoreContext from "../../StoreContext.js";
import Dialogs from "./Dialogs.jsx";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        const onSendMessageClick = () => {
          store.dispatch(sendMessageActionCreator());
        };

        const onSendMessageChange = (text) => {
          store.dispatch(updateNewMessageActionCreator(text));
        };

        return (
          <Dialogs
            updateNewMessage={onSendMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
