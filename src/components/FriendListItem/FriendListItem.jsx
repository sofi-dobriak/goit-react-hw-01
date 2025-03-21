import styles from "../FriendListItem/FriendListItem.module.css";

const FriendListItem = ({ friend }) => {
    const { avatar, name, isOnline } = friend;

    return (
        <li className={styles.friendsItemBox}>
            <img className={styles.friendsImage} src={avatar} alt="Avatar" width="48" />
            <p className={styles.friendsName}>{name}</p>
            <p className={isOnline ? styles.isOnline : styles.isOffline}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </li>
    );
};

export default FriendListItem;
