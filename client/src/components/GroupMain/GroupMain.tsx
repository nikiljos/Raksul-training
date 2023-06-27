import "./GroupMain.css";
import GroupForm from "./GroupForm/GroupForm";
// import MembersList from "./MembersList/MembersList";

// type groupData = {
//   groupName: string | null;
//   membersList: Array<string>;
// };

function GroupMain() {
  // const [groupData, setGroupData] = useState<groupData>({
  //   groupName: null,
  //   membersList: [],
  // });
  // const [memberName, setMemberName] = useState<string | null>();

  return (
    <div className="group-main-container">
      <div className="group-main-left">
        <GroupForm endpoint="group/create" createGroup={true} />
      </div>
      <div className="group-main-right">
        <GroupForm endpoint="group/join" createGroup={false} />
      </div>
    </div>
  );
}

export default GroupMain;
