import styles from "./Users.module.css";
import userImg from "../../images/user_img.png";

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
