import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
    return (
      <div className={css.userCard}>
        <div className={css.description}>
          <img className={css.avatarUser}
            src={image}
            alt="User avatar"
          />
          <p className={css.userName}>{name}</p>
          <p className={css.userTag}>@{tag}</p>
          <p className={css.userLocation}>{location}</p>
        </div>
  
        <ul className={css.userStats}>
          <li className={css.statsItem}>
            <span className={css.statsLabel}> Followers</span>
            <span className={css.statQuantity}>{stats.followers}</span>
          </li>
          <li className={css.statsItem} >
            <span className={css.statsLabel}>Views</span>
            <span className={css.statQuantity}>{stats.views}</span>
          </li>
          <li className={css.statsItem}>
            <span className={css.statsLabel}>Likes</span>
            <span className={css.statQuantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  };

export default Profile
