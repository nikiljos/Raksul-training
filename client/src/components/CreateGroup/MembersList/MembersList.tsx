import "./MembersList.css";
type groupData = {
  groupName: string | null;
  membersList: Array<string>;
};

type props = {
  setGroupData: React.Dispatch<React.SetStateAction<groupData>>;
  groupData: groupData;
};

function MembersList({ setGroupData, groupData }: props) {
  return (
    <div className="members-list">
      {groupData.membersList.map((name) => {
        return (
          <div className="member-box">
            <div className="member-name">{name}</div>
            <button
              className="delete-member-btn"
              onClick={(e) => {
                e.preventDefault();
                setGroupData({
                  ...groupData,
                  membersList: groupData.membersList.filter((e) => e !== name),
                });
              }}
            >
              <img src="./images/x.svg" alt="" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default MembersList;
