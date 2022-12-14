import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  // console.log(props);
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}
        // postsData={props.state.postsData}
        // newPostText={props.state.newPostText}
        // dispatch={props.dispatch}
      />{" "}
      {/* <MyPosts
        postsData={props.state.postsData}
        newPostText={props.state.newPostText}
        dispatch={props.dispatch}

        // addPost={props.addPost}
        // updateNewPost={props.updateNewPost}
      />{" "} */}
    </div>
  );
};

export default Profile;
