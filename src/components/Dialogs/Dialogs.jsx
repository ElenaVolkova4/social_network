import React from "react";
import { NavLink } from "react-router-dom";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/state";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));

  let messagesElements = props.state.messagesData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let newMessageElement = React.createRef();

  const addMessage = () => {
    props.dispatch(addMessageActionCreator());

    // props.addMessage();
  };

  const onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageActionCreator(text));

    // props.updateNewMessage(text);
  };

  return (
    <div>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>{dialogsElements}</div>
        <div className={styles.messages}>{messagesElements}</div>
      </div>
      <textarea
        ref={newMessageElement}
        onChange={onMessageChange}
        value={props.state.newMessageText}
      ></textarea>
      <button onClick={addMessage}>Send</button>
    </div>
  );
};

export default Dialogs;
