import styles from "./Post.module.css";

const Post = (props) => {
  // debugger;
  return (
    <div className="post">
      <div className={`${styles.post} ${styles.active}`}>
        <img
          src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3"
          alt="avatar"
        />
        <div> Like:{props.message}</div>
        <div> Like:{props.likeCount}</div>
      </div>
    </div>
  );
};

export default Post;
