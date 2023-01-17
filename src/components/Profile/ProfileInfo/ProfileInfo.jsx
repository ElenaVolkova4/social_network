import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
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
      <div className={styles.description}>
        <div>
          <img src={props.profile.photos.small} />
        </div>
        <div>
          <div>{props.profile.fullName}</div>
        </div>
        ava + descr
      </div>
    </div>
  );
};

export default ProfileInfo;
