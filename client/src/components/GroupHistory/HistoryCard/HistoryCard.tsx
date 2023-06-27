import "./HistoryCard.css";

function HistoryCard() {
  return (
    <div className="history-card">
      <div className="hc-content">
        <div className="title">Dubai Trip</div>
        <div className="date">11 Jan, 2023</div>
      </div>
      <div className="hc-btn-container">
        <div className="hc-btn share">
          <img src="./images/share.svg" alt="Share" />
        </div>
        <div className="hc-btn view">
          <img src="./images/view.svg" alt="View" />
        </div>
        <div className="hc-btn file">
          <img src="./images/file.svg" alt="Export" />
        </div>
      </div>
    </div>
  );
}

export default HistoryCard;
