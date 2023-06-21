import NavButton from "./NavButton/NavButton";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src="./images/cashcut-logo.svg" alt="CashCut" />
      </div>
      <NavButton />
    </div>
  );
}

export default Navbar;
