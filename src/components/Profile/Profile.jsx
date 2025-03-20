import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
    const { followers, views, likes } = stats;

    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageTitleContainer}>
                <img className={styles.image} src={image} alt="User avatar" width={200} />
                <p className={styles.name}>{name}</p>
                <p className={styles.tagLog}>@{tag}</p>
                <p className={styles.tagLog}>{location}</p>
            </div>

            <ul className={styles.statList}>
                <li className={styles.statItem}>
                    <span className={styles.statListTitle}>Followers</span>
                    <span className={styles.statListNumber}>{followers}</span>
                </li>
                <li className={styles.statItem}>
                    <span className={styles.statListTitle}>Views</span>
                    <span className={styles.statListNumber}>{views}</span>
                </li>
                <li className={styles.statItem}>
                    <span className={styles.statListTitle}>Likes</span>
                    <span className={styles.statListNumber}>{likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;
