import "./GroupMain.css";
import GroupForm from "./GroupForm/GroupForm";
import GroupHistory from "../GroupHistory/GroupHistory";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import LoginPrompt from "../Errors/LoginPrompt";

function GroupMain() {
  const auth=useAppSelector(state=>state.auth)
  return (
    auth.token?<div className="group-main-container">
      <div className="group-form-container">
        <div className="group-form-left">
          <GroupForm endpoint="group/create" createGroup={true} />
        </div>
        <div className="group-form-right">
          <GroupForm endpoint="group/join" createGroup={false} />
        </div>
      </div>
      <div className="group-records">
        <GroupHistory limit={3} />
        <Link to={"/history"} className="view-more-btn">
          View More
        </Link>
      </div>
    </div>:<LoginPrompt/>
  );
}

export default GroupMain;
