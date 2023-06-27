import "./GroupMain.css";
import GroupForm from "./GroupForm/GroupForm";

function GroupMain() {
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
