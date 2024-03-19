import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from React Router
import "../assets/css/NavBar.css";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/giftcraft.png";
import { Button } from "reactstrap";
import "../App.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function from useNavigate hook

  const handleLogOut = () => {};

  const handleClick = () => setClick(!click);

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <>
      <nav className="navbar1">
        <div className="nav-container1" style={{ fontSize: "1.5em" }}>
          <div className="nav-logo-link" onClick={handleLogoClick}>
            <img
              src={logo}
              alt="proj-title"
              className="nav-logo"
              style={{ width: "64px", height: "64px" }}
            />
          </div>
          GiftCraft
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <MenuIcon style={{ fontSize: "30px" }} />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
