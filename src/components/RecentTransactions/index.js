import './style.css'
import { useState } from 'react';
import Transaction from '../Transactions';




function RecentTransaction({ transactions, setTransactions, handleEdit, handleDelete }) {
  const itemsPerPage = 3; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range of transactions to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedTransactions = transactions.slice(startIndex, endIndex);

  const sortedTransactions = transactions.sort((a, b) => new Date(b.date) - new Date(a.date));
  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <>
      <div className='recent-transactions-container'>

        <h3 id='transaction-header'>  Recent Transactions</h3>

        {transactions.length > 0 ? (<div className="transactions-list">
          {sortedTransactions.map(transaction => (
            <Transaction key={transaction.id} transaction={transaction} handleEdit={handleEdit} handleDelete={handleDelete} />
          ))}
          {totalPages > 1 && (
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={currentPage === i + 1 ? 'active' : ''}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>) :
          (<div className="transactions-list-empty">
            <h4 id='warning-text'>No transactions yet 💵</h4>
          </div>
          )}



      </div>
    </>

  )
}

export default RecentTransaction

