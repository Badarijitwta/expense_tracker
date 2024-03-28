import "./style.css";
import WalletContainer from "./../WalletContainer/index";
import ExpensesContainer from "./../ExpenseContainer/index";
import React, { Suspense, useState } from "react";
const LazySimplePieChart = React.lazy(() => import("../ChartComponent/index"));

function FocusElements() {
  const [walletBalance, setWalletBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  console.log(transactions);
  return (
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
  );
}

export default FocusElements;
