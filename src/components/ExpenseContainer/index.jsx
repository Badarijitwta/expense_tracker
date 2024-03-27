import "./style.css";
import { AddExpenseButton } from "../Buttons";

function ExpensesContainer() {
  return (
    <div className="expense-wrapper">
      <h4 id="expense-text">
        Expenses: <span>₹100</span>
      </h4>
      <AddExpenseButton />
    </div>
  );
}

export default ExpensesContainer;
