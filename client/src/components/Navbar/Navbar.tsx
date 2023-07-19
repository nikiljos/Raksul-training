import { useEffect } from "react";
import NavButton from "./NavButton/NavButton";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setToken, setUser, unsetUser } from "../LoginSignup/AuthSlice";

function Navbar() {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    function getUserDetails() {
      fetch(`${process.env.REACT_APP_SERVER_URL}/api/user/detail`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          let { name, email, id } = data.data;
          dispatch(setUser({ id, name, email, image: "" }));
        })
        .catch((error) => {
          console.error("Couldn't get user details:", error);
          dispatch(unsetUser());
        });
    }

    let oldToken = localStorage.getItem("access_token");
    oldToken && dispatch(setToken(oldToken));
    auth.token && getUserDetails();
  }, [auth.token, dispatch]);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src="/images/cashcut-logo.svg" alt="CashCut" />
        </Link>
      </div>
      <div className="nav-links">
        {auth.token ? (
          location.pathname === "/home" ? (
            <Link to={"/history"}>Previous Records</Link>
          ) : (
            <Link to={"/home"}>Dashboard</Link>
          )
        ) : null}
        <NavButton />
      </div>
    </div>
  );
}

export default Navbar;
