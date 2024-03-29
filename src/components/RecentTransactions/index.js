import './style.css'

import Transaction from '../Transactions';

function RecentTransaction({ transactions, setTransactions, handleEdit, handleDelete }) {

  const sortedTransactions = transactions.sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <>
      <div className='recent-transactions-container'>

        <h3 id='transaction-header'>  Recent Transactions</h3>

        <div className="transactions-list">
          {sortedTransactions.map(transaction => (
            <Transaction key={transaction.id} transaction={transaction} handleEdit={handleEdit} handleDelete={handleDelete} />
          ))}

        </div>

      </div>
    </>

  )
}

export default RecentTransaction

