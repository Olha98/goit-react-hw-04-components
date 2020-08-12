import React from 'react';
import './ListBody.module.css'


const ListBody =({type, amount, currency})=>{
  return(
  <>
   <tr>
     <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
  </tr>
  </>
  )
  }
  export default ListBody