import "./HistoryCard.css";

type Props = {
  name: string;
  date: string;
};

function HistoryCard({ name, date }: Props) {
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    return date.toLocaleDateString("en-IN", options);
  }

  return (
    <div className="history-card">
      <div className="hc-content">
        <div className="title">{name}</div>
        <div className="date">{formatDate(date)}</div>
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
