import TransactionHistoryItem from "./TransactionHistoryItem";

const TransactionHistory = ({ items }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, id) => (
                    <TransactionHistoryItem key={id} item={item} />
                ))}
            </tbody>
        </table>
    );
};

export default TransactionHistory;
