import "./style.css";

export default function TopExpenses({ data }) {
  return (
    <div className="top-expenses-container">
      <h3>Top Expenses</h3>
      <div className="top-expenses-graph"></div>
    </div>
  );
}
