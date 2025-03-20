import FriendListItem from "./FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friendsList}>
            <li className={styles.friendsItem}>
                {friends.map((friend, id) => (
                    <FriendListItem key={id} friend={friend} />
                ))}
            </li>
        </ul>
    );
};

export default FriendList;
