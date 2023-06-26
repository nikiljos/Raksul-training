import { useState } from "react";
import "./CreateGroup.css";
import MembersList from "./MembersList/MembersList";

type groupData = {
  groupName: string | null;
  membersList: Array<string>;
};

function CreateGroup() {
  const [groupData, setGroupData] = useState<groupData>({
    groupName: null,
    membersList: [],
  });
  const [memberName, setMemberName] = useState<string | null>();
  return (
    <div className="create-group-container">
      <div className="create-group-left">
        <form action="/" method="POST" className="create-group-form">
          <h2 className="create-group-heading">Create a New Group</h2>
          <div className="form-item">
            <label htmlFor="group-name">Group Name</label>
            <input
              onChange={(e) => {
                setGroupData({
                  ...groupData,
                  groupName: e.target.value,
                } as groupData);
              }}
              type="text"
              name="group-name"
              id="group-name"
              // value={formValues.name}
              placeholder="Dubai Trip"
            />
          </div>
          <div className="form-item">
            <label htmlFor="members-name">Member Name</label>
            <div className="members-field">
              <div className="members-input-box">
                <input
                  type="text"
                  onChange={(e) => {
                    setMemberName(e.target.value);
                  }}
                  name="group-name"
                  id="group-name"
                  // value={formValues.name}
                  placeholder="John Doe"
                />
                <button
                  className="member-add-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setGroupData({
                      ...groupData,
                      membersList: [
                        ...groupData.membersList,
                        memberName ? memberName : null,
                      ],
                    } as groupData);
                  }}
                >
                  Add
                </button>
              </div>
              <MembersList groupData={groupData} setGroupData={setGroupData} />
            </div>
          </div>
          <button type="submit" className="get-started-btn">
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateGroup;
