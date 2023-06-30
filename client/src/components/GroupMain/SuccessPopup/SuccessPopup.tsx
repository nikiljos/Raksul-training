import { Link } from "react-router-dom";
import "./SuccessPopup.css";

type Props = {
  message: string;
  group_data: group_data;
};

type group_data = { id: string; name: string; invite_code: string };

export default function SuccessPopup({ message, group_data }: Props) {
  const { name, invite_code, id } = group_data;
  return (
    <div className="success-popup">
      <div className="popup-container">
        <div className="popup-msg">{message}</div>
        <div className="popup-text">
          <b>Name:</b> {name}
        </div>
        <div className="popup-text">
          <b>Code:</b> {invite_code}
        </div>
      </div>
      <Link to={`/group/${id}`} className="popup-btn">
        Next <img src="/images/arrow-right.svg" alt="" />
      </Link>
    </div>
  );
}
