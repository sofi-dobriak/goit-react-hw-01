import Profile from "./components/Profile/Profile";
import userData from "./json-data/userData.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./json-data/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./json-data/transactions.json";
import "modern-normalize";

function App() {
    return (
        <>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </>
    );
}

export default App;
