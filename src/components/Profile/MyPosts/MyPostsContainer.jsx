import React from "react";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/profile-reducer.js";
import MyPosts from "./MyPosts.jsx";

const MyPostsContainer = (props) => {
  // console.log(props);

  let state = props.store.getState();
  // console.log(state);

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPost={onPostChange}
      addPost={addPost}
      posts={state.profilePage.postsData}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
