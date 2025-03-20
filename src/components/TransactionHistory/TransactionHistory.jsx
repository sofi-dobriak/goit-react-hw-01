import TransactionHistoryItem from "./TransactionHistoryItem";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.table}>
            <thead className={styles.tableHead}>
                <tr>
                    <th className={styles.tableHeadText}>Type</th>
                    <th className={styles.tableHeadText}>Amount</th>
                    <th className={styles.tableHeadText}>Currency</th>
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
