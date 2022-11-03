import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.item}>
        <a className="item" href="/profile">
          Profile
        </a>
      </div>
      <div className={styles.item}>
        <a href="/dialogs">Messages</a>
      </div>
      <div className={styles.item}>
        <a href="/news">News</a>
      </div>
      <div className={styles.item}>
        <a href="/music">Music</a>
      </div>
      <div className={styles.item}>
        <a href="/settings">Settings</a>
      </div>
    </div>
  );
};

export default NavBar;
