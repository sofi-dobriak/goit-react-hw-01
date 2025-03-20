import styles from "./TransactionHistory.module.css";

const TransactionHistoryItem = ({ item }) => {
    const { type, amount, currency } = item;

    return (
        <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    );
};

export default TransactionHistoryItem;
