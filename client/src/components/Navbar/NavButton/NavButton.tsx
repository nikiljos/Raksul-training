import "./NavButton.css";
import { Link } from "react-router-dom";

function NavButton() {
  return (
    <Link to="/login">
      <button className="nav-btn">Login</button>
    </Link>
  );
}

export default NavButton;
