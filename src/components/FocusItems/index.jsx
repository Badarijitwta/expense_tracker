import "./style.css";
import WalletContainer from "./../WalletContainer/index";
import ExpensesContainer from "./../ExpenseContainer/index";
import React, { Suspense } from "react";
const LazySimplePieChart = React.lazy(() => import("../ChartComponent/index"));

function FocusElements() {
  return (
    <div className="top-content-container">
      <div className="top-content-wrapper">
        <div className="wallet-balance-container">
          <WalletContainer />
        </div>
        <div className="expense-container">
          <ExpensesContainer />
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
