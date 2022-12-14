import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/dialogs-reducer.js";
import Dialogs from "./Dialogs.jsx";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  const onSendMessageChange = (text) => {
    props.store.dispatch(updateNewMessageActionCreator(text));
  };

  return (
    <div>
      <Dialogs
        updateNewMessage={onSendMessageChange}
        sendMessage={onSendMessageClick}
        dialogsPage={state}
      />
    </div>
  );
};

export default DialogsContainer;
