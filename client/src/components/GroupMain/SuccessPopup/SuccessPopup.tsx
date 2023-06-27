import "./SuccessPopup.css";

type Props = {
  message: string;
  invite_code: string;
};

export default function SuccessPopup({ message, invite_code }: Props) {
  return (
    <div className="success-popup">
      <div className="popup-container">
        <div className="popup-msg">{message}</div>
        <div className="invite-code">
          <b>Code:</b> {invite_code}
        </div>
      </div>
      <button className="popup-btn">
        Next <img src="./images/arrow-right.svg" alt="" />
      </button>
    </div>
  );
}
