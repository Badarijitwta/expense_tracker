import "./style.css";
import WalletContainer from "./../WalletContainer/index";
import ExpensesContainer from "./../ExpenseContainer/index";

import React, { Suspense, useState, useEffect } from "react";
import TopExpenses from "../TopExpenses";

const LazyRecentTransaction = React.lazy(() =>
  import("../RecentTransactions/index")
);

const LazySimplePieChart = React.lazy(() => import("../ChartComponent/index"));

function FocusElements() {
  const [walletBalance, setWalletBalance] = useState(
    () => parseFloat(localStorage.getItem("walletBalance")) || 0
  );
  const [transactions, setTransactions] = useState(
    () => JSON.parse(localStorage.getItem("transactions")) || []
  );

  useEffect(() => {
    localStorage.setItem("walletBalance", walletBalance);
  }, [walletBalance]);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);
  const handleEdit = (id) => {
    // Find the transaction to edit
    const transactionToEdit = transactions.find(
      (transaction) => transaction.id === id
    );
    // Perform editing logic here (e.g., open a modal for editing)
    console.log("Editing transaction:", transactionToEdit);
  };

  // Function to handle deleting a transaction
  const handleDelete = (id, price) => {
    // Filter out the transaction to delete
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    const updatedWalletBalance = parseFloat(walletBalance) + parseFloat(price);

    // Update the state with the filtered transactions
    setTransactions(updatedTransactions);
    setWalletBalance(updatedWalletBalance);
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
              <LazySimplePieChart
                data={transactions.map((transaction) => ({
                  category: transaction.category,
                  price: transaction.price,
                }))}
              />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="below-content-container">
        <Suspense fallback={<div>Loading...</div>}>
          <LazyRecentTransaction
            transactions={transactions}
            setTransactions={setTransactions}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </Suspense>

        <TopExpenses />
      </div>
    </div>
  );
}

export default FocusElements;
