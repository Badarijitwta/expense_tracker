import "./style.css";

function ExpensesContainer() {
  return (
    <div className="expense-wrapper">
      <h4 id="expense-text">
        Expenses: <span>₹100</span>
      </h4>
      <div className="expense-button">
        <button> + Add Expense</button>
      </div>
    </div>
  );
}

export default ExpensesContainer;
