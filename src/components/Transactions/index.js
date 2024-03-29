import './style.css'
import { MdDelete, MdEdit } from 'react-icons/md';
import { FaHamburger, FaBus, FaShoppingCart, FaUserFriends, FaQuestion, FaFootballBall } from 'react-icons/fa';

function Transaction({ transaction, handleEdit, handleDelete }) {
  const categoryIcons = {
    food: <FaHamburger size={30} />,
    transport: <FaBus size={30} />,
    shopping: <FaShoppingCart size={30} />,
    entertainment: <FaUserFriends size={30} />,
    sport: <FaFootballBall size={30} />
    // Add more categories and icons as needed
  };
  return (
    <div className='individual-transaction'>
      <li key={transaction.id}>
        <div id='transaction-icon'>
          {/* Display icon based on category */}
          {categoryIcons[transaction.category.toLowerCase()] || <FaQuestion />} {/* Default icon if category not found */}
        </div>
        <div id='transaction-td-wrapper'>
          <h2>{transaction.title}</h2>
          <p>{transaction.date}</p>
        </div>
        <div id='transaction-pb-wrapper'>
          {/* Edit and delete buttons */}
          <p>₹{transaction.price.toFixed(2)}</p>
          <button onClick={() => handleEdit(transaction.id)}><MdEdit /></button>
          <button onClick={() => handleDelete(transaction.id)}><MdDelete /></button>
        </div>
      </li>

    </div>
  )
}

export default Transaction
