import React from "react";

import styles from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: true,
        photoUrl:
          "https://www.vokrug.tv/pic/person/a/f/c/e/afced21c66cbd6e9a648467249da905f.jpeg",
        fullName: "Dmitry K.",
        status: "Hi",
        location: {
          city: "Minsk",
          country: "Belarus",
        },
      },
      {
        id: 2,
        followed: true,
        photoUrl:
          "https://www.vokrug.tv/pic/person/a/f/c/e/afced21c66cbd6e9a648467249da905f.jpeg",
        fullName: "Helena V.",
        status: "Looking for..",
        location: {
          city: "Moscow",
          country: "Russia",
        },
      },
      {
        id: 3,
        followed: false,
        photoUrl:
          "https://www.vokrug.tv/pic/person/a/f/c/e/afced21c66cbd6e9a648467249da905f.jpeg",
        fullName: "Lera L.",
        status: "Not here",
        location: {
          city: "Minsk",
          country: "Belarus",
        },
      },
      {
        id: 4,
        followed: true,
        photoUrl:
          "https://www.vokrug.tv/pic/person/a/f/c/e/afced21c66cbd6e9a648467249da905f.jpeg",

        fullName: "Dmitry K",
        status: "available",
        location: {
          city: "London",
          country: "England",
        },
      },
    ]);
  }
  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <img src={user.photoUrl} className={styles.userPhoto} />
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
            <div>{user.fullName}</div>
            <div>{user.status}</div>
          </span>
          <span>
            {" "}
            <div>{user.location.city}</div>
            <div>{user.location.country}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
