import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.item}>
        <a className="item" href="">
          Profile
        </a>
      </div>
      <div className={styles.item}>
        <a href="">Messages</a>
      </div>
      <div className={styles.item}>
        <a href="">News</a>
      </div>
      <div className={styles.item}>
        <a href="">Music</a>
      </div>
      <div className={styles.item}>
        <a>Settings</a>
      </div>
    </div>
  );
};

export default NavBar;
