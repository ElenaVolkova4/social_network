import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import styles from "./NavBar.module.css";

//для выделения активных ссылок другим цветом
const setActiveLink = ({ isActive }) => (isActive ? styles.activeLink : "");

const NavBar = (props) => {
  return (
    <div className={styles.nav}>
      <div className={styles.item}>
        <NavLink to="/profile" className={setActiveLink}>
          Profile
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/dialogs" className={setActiveLink}>
          Messages
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/news" className={setActiveLink}>
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/music" className={setActiveLink}>
          Music
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/settings" className={setActiveLink}>
          Settings
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/users" className={setActiveLink}>
          Users
        </NavLink>
      </div>

      <Friends />
    </div>
  );
};

export default NavBar;
