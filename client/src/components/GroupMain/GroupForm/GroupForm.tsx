import { FormEvent, useState } from "react";
import "./GroupForm.css";
import SuccessPopup from "../SuccessPopup/SuccessPopup";
import { useAppSelector } from "../../../hooks";

type Props = {
  endpoint: string;
  createGroup: boolean;
};

type popupData = {
  message: string;
  group_data: group_data;
};

type group_data = { id: string; name: string; invite_code: string };

function GroupForm({ endpoint, createGroup }: Props) {
  const [groupInfo, setGroupInfo] = useState<string | null>();
  const [popupData, setPopupData] = useState<popupData>();
  const [showPopup, setShowPopup] = useState<boolean>();

  const { user } = useAppSelector((state) => state.auth);

  function onSubmitHandler(e: FormEvent) {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        groupName: groupInfo,
        admin: user.id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          setPopupData({
            message: data.message,
            group_data: data.group_data,
          });
          setShowPopup(true);
        }
        console.log("Message:", data);
      })
      .catch((error) => {
        console.error("Backend request failed:", error);
      });
  }
  return (
    <>
      {showPopup && (
        <SuccessPopup
          message={popupData?.message as string}
          group_data={popupData?.group_data as group_data}
        />
      )}
      <form action="/" method="POST" className="create-group-form">
        <h2 className="create-group-heading">
          {createGroup ? "Create a New Group" : "Join a Group"}
        </h2>
        <div className="form-item">
          <label htmlFor="group-info">
            Group {createGroup ? "Name" : "Code"}
          </label>
          <input
            onChange={(e) => {
              setGroupInfo(e.target.value);
            }}
            type="text"
            name="group-info"
            id="group-info"
            value={groupInfo as string}
            placeholder={createGroup ? "Dubai Trip" : "25BH3210"}
          />
        </div>
        <button
          type="submit"
          className="get-started-btn"
          onClick={(e) => onSubmitHandler(e)}
        >
          {createGroup ? "Get Started" : "Join the Group"}
        </button>
      </form>
    </>
  );
}

export default GroupForm;
