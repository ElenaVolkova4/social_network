import axios from "axios";
import React from "react";
import userImg from "../../images/user_img.png";
import styles from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        // debugger;
        props.setUsers(response.data.items);
      });
  }
  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <img
                src={user.photos.small != null ? user.photos.small : userImg}
                className={styles.userPhoto}
              />
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
          <span>
            {" "}
            <div>{"user.location.city"}</div>
            <div>{"user.location.country"}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
