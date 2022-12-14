import React from "react";
import { NavLink } from "react-router-dom";
import {
  sendMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/dialogs-reducer.js";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  // console.log(props);

  let dialogsElements = state.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));

  let messagesElements = state.messagesData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  // let newMessageElement = React.createRef();

  const onSendMessage = () => {
    props.sendMessage();
    // props.store.dispatch(sendMessageActionCreator());

    // props.addMessage();
  };

  const onSendMessageChange = (event) => {
    let text = event.target.value;
    props.updateNewMessage(text);
    // props.store.dispatch(updateNewMessageActionCreator(text));

    // props.updateNewMessage(text);
  };

  return (
    <div>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>{dialogsElements}</div>
        <div className={styles.messages}>{messagesElements}</div>
      </div>

      <textarea
        // ref={newMessageElement}
        onChange={onSendMessageChange}
        value={state.newMessageText}
        placeholder="Enter your messsage"
      ></textarea>
      <button onClick={onSendMessage}>Send</button>
    </div>
  );
};

export default Dialogs;
