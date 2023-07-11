import { Link } from "react-router-dom";
import "./HistoryCard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppSelector } from "../../../hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  name: string;
  id: number;
  date: string;
  invite_code: string;
};

function HistoryCard({ name, id, date, invite_code }: Props) {
  const { token } = useAppSelector((state) => state.auth);
  const queryClient = useQueryClient();

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

  const handleDelete = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/group/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.json();
  };

  const deleteMutation = useMutation(handleDelete, {
    onSuccess: (data) => {
      if (data.success) {
        toast.success("Group deleted!");
        queryClient.invalidateQueries(["history"]);
      } else {
        toast.error(data.message);
      }
    },
  });

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
          <div className="hc-btn file" onClick={() => deleteMutation.mutate()}>
            {/* <img src="/images/file.svg" alt="Export" /> */}
            <img src="/images/delete.svg" alt="Delete" />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default HistoryCard;
