import styles from "./FriendList.module.css";

const FriendListItem = ({ friend }) => {
    const { avatar, name, isOnline } = friend;

    return (
        <div className={styles.friendsItemBox}>
            <img className={styles.friendsImage} src={avatar} alt="Avatar" width="48" />
            <p className={styles.friendsName}>{name}</p>
            <p className={isOnline ? styles.isOnline : styles.isOffline}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </div>
    );
};

export default FriendListItem;
