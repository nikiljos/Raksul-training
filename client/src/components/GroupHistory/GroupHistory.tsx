import "./GroupHistory.css";
import HistoryCard from "./HistoryCard/HistoryCard";

function GroupHistory() {
  function getHistory() {}
  return (
    <div className="group-history">
      <h1 className="history-heading">Your Previous Records</h1>
      <div className="history-cards-container">
        <HistoryCard />
      </div>
    </div>
  );
}

export default GroupHistory;
