import "./style.css";
import WalletContainer from "./../WalletContainer/index";
import ExpensesContainer from "./../ExpenseContainer/index";
import RecentTransaction from "./../RecentTransactions/index";
import React, { Suspense, useState } from "react";
import TopExpenses from "../TopExpenses";
const LazySimplePieChart = React.lazy(() => import("../ChartComponent/index"));

function FocusElements() {
  const [walletBalance, setWalletBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const handleEdit = (id) => {
    // Find the transaction to edit
    const transactionToEdit = transactions.find(
      (transaction) => transaction.id === id
    );
    // Perform editing logic here (e.g., open a modal for editing)
    console.log("Editing transaction:", transactionToEdit);
  };

  // Function to handle deleting a transaction
  const handleDelete = (id) => {
    // Filter out the transaction to delete
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    // Update the state with the filtered transactions
    setTransactions(updatedTransactions);
  };

  return (
    <div className="total-content">
      <div className="top-content-container">
        <div className="top-content-wrapper">
          <div className="wallet-balance-container">
            <WalletContainer
              walletBalance={walletBalance}
              setWalletBalance={setWalletBalance}
            />
          </div>
          <div className="expense-container">
            <ExpensesContainer
              transactions={transactions}
              setTransactions={setTransactions}
              walletBalance={walletBalance}
              setWalletBalance={setWalletBalance}
            />
          </div>
          <div className="pie-chart-container">
            <Suspense fallback={<div>Loading...</div>}>
              <LazySimplePieChart />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="below-content-container">
        <RecentTransaction
          transactions={transactions}
          setTransactions={setTransactions}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        <TopExpenses />
      </div>
    </div>
  );
}

export default FocusElements;
