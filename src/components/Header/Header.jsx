import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <img
        src="https://static.sobaka.ru/images/post/00/09/75/23/_rotator.jpg?v=1570469047"
        alt=""
      />
      <div className={styles.login}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>{" "}
    </div>
  );
};

export default Header;
