import { useAppSelector } from "../../../hooks";
import "./NavButton.css";
import { Link } from "react-router-dom";

function NavButton() {
  const auth = useAppSelector((state) => state.auth);
  return (
    <Link to="/login">
      <button className="nav-btn">{auth.token ? "Log Out" : "Log In"}</button>
    </Link>
  );
}

export default NavButton;
