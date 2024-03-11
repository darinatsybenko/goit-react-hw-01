


const TransactionHistory = ({items}) => {
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
    {items.map(transactiom) => (
      
    )
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Payment</td>
      <td>85</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Payment</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>125</td>
      <td>USD</td>
    </tr>
  </tbody>
   </table>
  )
}

export default TransactionHistory
