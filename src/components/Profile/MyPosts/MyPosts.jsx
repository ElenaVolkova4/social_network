import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  // console.log(props);
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} key={p.id} />
  ));

  let newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPost(text);
  };

  return (
    <div className={styles.posts}>
      <h3>My posts</h3>
      <div>
        <textarea
          ref={newPostElement}
          onChange={onPostChange}
          value={props.newPostText}
        />
      </div>
      <div>
        <button onClick={onAddPost}>Add</button>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
