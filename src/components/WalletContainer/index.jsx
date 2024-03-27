import "./style.css";

function WalletContainer() {
  return (
    <div className="wallet-balance-wrapper">
      <h4 id="wallet-balance-text">
        Wallet Balance: <span>₹100</span>
      </h4>
      <div className="wallet-balance-button">
        <button> + Add Income</button>
      </div>
    </div>
  );
}

export default WalletContainer;
