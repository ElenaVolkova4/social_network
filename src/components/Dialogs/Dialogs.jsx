import React from "react";
import { NavLink } from "react-router-dom";
import {
  sendMessageActionCreator,
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

  // let newMessageElement = React.createRef();

  const sendMessage = () => {
    props.dispatch(sendMessageActionCreator());

    // props.addMessage();
  };

  const onSendMessageChange = (event) => {
    let text = event.target.value;
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
        // ref={newMessageElement}
        onChange={onSendMessageChange}
        value={props.state.newMessageText}
        placeholder="Enter your messsage"
      ></textarea>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Dialogs;
