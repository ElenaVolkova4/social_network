import styles from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div
    // className={styles.content}
    >
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>
          <div className={styles.dialog + " " + styles.active}>Катя</div>
          <div className={styles.dialog}>Варя</div>
          <div className={styles.dialog}>Костя</div>
          <div className={styles.dialog}>Ника</div>
          <div className={styles.dialog}>Рома</div>
        </div>
        <div className={styles.messages}>
          <div className={styles.message}>Hi</div>
          <div className={styles.message}>Yo</div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
