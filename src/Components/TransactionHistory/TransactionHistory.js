import React from 'react';
import ListBody from './ListBody/ListBody.js'
import style from './TransactionHistory.module.css'

const TransactionHistory =(props)=>{
  const items = props.items
  console.log(items)
return(
<table className={style.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
  {items.map(item => <ListBody key={item.id} {...item}/>)}
  </tbody>
  </table>
)
}
export default TransactionHistory