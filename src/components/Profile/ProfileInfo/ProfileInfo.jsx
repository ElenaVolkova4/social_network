import styles from "./ProfileInfo.module.css";

// import {l} from "../../../images/banner"

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={styles.img}
          src="https://media.istockphoto.com/photos/dogs-banner-picture-id186810001"
          // src="https://www.dogbible.com/app/images/papillon-breed-description-297933.png"

          alt=""
        />
      </div>
      <div className={styles.description}>ava + descr</div>
    </div>
  );
};

export default ProfileInfo;
