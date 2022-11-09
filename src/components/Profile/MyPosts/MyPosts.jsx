import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    {
      message: "Hello everybody",
      likeCount: "12",
      id: "1",
    },
    {
      message: "I'm back",
      likeCount: "8",
      id: "2",
    },
  ];

  let postsElements = postsData.map((p) => (
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
      {/* <Post message={postsData[0].message} likeCount={postsData[0].likeCount} />
      <Post message={postsData[1].message} likeCount={postsData[1].likeCount} /> */}
      {postsElements}
    </div>
  );
};

export default MyPosts;
