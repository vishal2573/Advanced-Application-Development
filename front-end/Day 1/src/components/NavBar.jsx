import React, { useState } from "react";
import "../assets/css/NavBar.css";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/harmony-logo.png";
import { Button } from "reactstrap";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleLogOut = () => {
  
  };

  const handleClick = () => setClick(!click);


  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          
            <img src={logo} alt="proj-title" />
            Harmony
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              
                Home
            </li>
            <li className="nav-item">
           
                About
            </li>
           
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <MenuIcon style={{ fontSize: "30px" }} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
