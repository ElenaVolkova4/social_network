import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={styles.posts}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add</button>
      </div>
      <Post message="Hi" likeCount="23" />
      <Post message="How are you?" likeCount="12" />
    </div>
  );
};

export default MyPosts;
