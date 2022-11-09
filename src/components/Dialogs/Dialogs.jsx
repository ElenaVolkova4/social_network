import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";

// const DialogItem = (props) => {
//   return <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>;
// };

// const Message = (props) => {
//   return <div className={styles.message}>{props.message}</div>;
// };

const Dialogs = () => {
  let dialogsData = [
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
  ];

  let messagesData = [
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
  ];

  let dialogsElements = dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));
  let messagesElements = messagesData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  return (
    <div>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>{dialogsElements}</div>
        <div className={styles.messages}>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
