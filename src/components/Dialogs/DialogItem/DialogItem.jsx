import styles from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>;
};

export default DialogItem;
