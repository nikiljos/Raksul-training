import { Link } from "react-router-dom";
import "./HistoryCard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  name: string;
  id: number;
  date: string;
  invite_code: string;
};

function HistoryCard({ name, id, date, invite_code }: Props) {
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    return date.toLocaleDateString("en-IN", options);
  }

  const copyURL = (id: number) => {
    navigator.clipboard
      .writeText(`${process.env.REACT_APP_SITE_URL}/group/${id}`)
      .then(() => {
        toast.success("Link copied to clipboard!");
      })
      .catch((error) => {
        toast.error("Failed to copy URL to clipboard:");
      });
  };

  return (
    <>
      <div className="history-card">
        <div className="hc-content">
          <div className="title">{name}</div>
          <div className="invite-code">
            <b>Code:</b> {invite_code}
          </div>
          <div className="date">{formatDate(date)}</div>
        </div>
        <div className="hc-btn-container">
          <div className="hc-btn share" onClick={() => copyURL(id)}>
            <img src="/images/share.svg" alt="Share" />
          </div>
          <Link to={`/group/${id}`} className="hc-btn view">
            <img src="/images/view.svg" alt="View" />
          </Link>
          <div className="hc-btn file">
            <img src="/images/file.svg" alt="Export" />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default HistoryCard;
