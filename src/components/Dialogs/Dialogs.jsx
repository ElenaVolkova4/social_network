import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const DialogItem = (props) => {
  return <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>;
};

const Message = (props) => {
  return <div className={styles.message}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>
          <div className={styles.dialog + " " + styles.active}>
            <DialogItem name="Катя" id="1" />
          </div>
          <div className={styles.dialog}>
            <DialogItem name="Варя" id="2" />
          </div>
          <div className={styles.dialog}>
            <DialogItem name="Костя" id="3" />
          </div>
          <div className={styles.dialog}>
            <DialogItem name="Ника" id="4" />
          </div>
          <div className={styles.dialog}>
            <DialogItem name="Рома" id="5" />
          </div>
        </div>
        <div className={styles.messages}>
          <Message message="Hi" />
          <Message message="Yo" />
          <Message message="How are you?" />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
