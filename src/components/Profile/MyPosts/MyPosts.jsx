import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className="posts">
      My posts
      <textarea></textarea>
      <button>Add</button>
      <Post message="Hi" likeCount="23" />
      <Post message="How are you?" likeCount="12" />
    </div>
  );
};

export default MyPosts;
