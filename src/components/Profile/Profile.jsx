import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        {/* <img src="../images/papillon.png" alt="" /> */}
        <img
          src="https://www.dogbible.com/app/images/papillon-breed-description-297933.png"
          alt=""
        />
      </div>
      <div>ava + descr</div>
      <MyPosts />{" "}
    </div>
  );
};

export default Profile;
