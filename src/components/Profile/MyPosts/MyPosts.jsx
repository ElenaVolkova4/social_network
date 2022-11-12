import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} key={p.id} />
  ));

  return (
    <div className={styles.posts}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add</button>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
