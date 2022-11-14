import React from "react";
import { NavLink } from "react-router-dom";
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

  let newMessage = React.createRef();
  const addMessage = () => {
    console.log(newMessage.current.value);
    console.log(newMessage);
  };

  return (
    <div>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>{dialogsElements}</div>
        <div className={styles.messages}>{messagesElements}</div>
      </div>
      <textarea ref={newMessage}></textarea>
      <button onClick={addMessage}>Sent</button>
    </div>
  );
};

export default Dialogs;
