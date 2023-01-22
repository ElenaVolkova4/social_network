import styles from "./Users.module.css";
import userImg from "../../images/user_img.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  //доработка из комментариев
  let slicedPages;
  let curPage = props.currentPage;
  if (curPage - 3 < 0) {
    slicedPages = pages.slice(0, 5);
  } else {
    slicedPages = pages.slice(curPage - 3, curPage + 2);
  }

  return (
    <div>
      <div>
        {slicedPages.map((page) => {
          {
            /* {pages.map((page) => { */
          }
          return (
            <span
              // key={page}
              className={
                styles.page +
                " " +
                (props.currentPage === page ? styles.selectedPage : "")
              }
              onClick={(e) => {
                props.onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + user.id}>
                <img
                  src={user.photos.small != null ? user.photos.small : userImg}
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.toggleFollowingProgress(true, user.id);

                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,

                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "1b45f043-c0cb-4548-939f-fb1cfa7b8b54",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode == 0) {
                          props.unfollow(user.id);
                        }
                        props.toggleFollowingProgress(false, user.id);
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.toggleFollowingProgress(true, user.id);
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                        {},
                        {
                          withCredentials: true,
                          // headers: {
                          //   "API-KEY": "1b45f043-c0cb-4548-939f-fb1cfa7b8b54",
                          // },
                        }
                      )

                      .then((response) => {
                        if (response.data.resultCode == 0) {
                          props.follow(user.id);
                        }
                        props.toggleFollowingProgress(false, user.id);
                      });
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
