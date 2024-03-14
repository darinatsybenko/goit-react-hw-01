import css from "./TransactionHistory.module.css"


const TransactionHistory = ({items}) => {
  return (
   <table className={css.table}>
<thead className={css.tableHead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
   {items.map((transaction) => (
    <tr className={css.row} key={transaction.id}>
    <td className={css.cell}>{transaction.type}</td>
    <td className={css.cell}>{transaction.amount}</td>
    <td className={css.cell}>{transaction.currency}</td>
  </tr>
   ))}
  </tbody>
   </table>
  );
};

export default TransactionHistory
