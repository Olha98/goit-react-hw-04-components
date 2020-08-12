import React from 'react';
import ReactDOM from 'react-dom';
import transactions from '../src/transactions.json';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory'

ReactDOM.render(
  <TransactionHistory items={transactions} />,
  document.getElementById('root'),
);

