import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
    return (
        <ul>
            {friends.map((friend, id) => (
                <FriendListItem key={id} friend={friend} />
            ))}
        </ul>
    );
};

export default FriendList;
