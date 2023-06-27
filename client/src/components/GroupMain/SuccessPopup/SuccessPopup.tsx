import "./SuccessPopup.css";

type Props = {
  message: string;
  invite_code: string;
  groupName: string;
};

export default function SuccessPopup({
  message,
  invite_code,
  groupName,
}: Props) {
  return (
    <div className="success-popup">
      <div className="popup-container">
        <div className="popup-msg">{message}</div>
        <div className="popup-text">
          <b>Name:</b> {groupName}
        </div>
        <div className="popup-text">
          <b>Code:</b> {invite_code}
        </div>
      </div>
      <button className="popup-btn">
        Next <img src="./images/arrow-right.svg" alt="" />
      </button>
    </div>
  );
}
