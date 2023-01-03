import axios from "axios";
import React from "react";
import userImg from "../../images/user_img.png";
import styles from "./Users.module.css";

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div>
        {this.props.users.map((user) => (
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
                      this.props.unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id);
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
  }
}

export default Users;
