import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  // console.log(props);
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
