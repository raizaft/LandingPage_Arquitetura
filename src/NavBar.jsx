import React from "react";
import Hamburger from "hamburger-react";
import "./NavBar.css";

function NavBar({ toggleMenu }) {
  return (
    <nav>
      <div id="navbar">
        <div id="navcontent">
          <img src="img/logo.png" alt="logo" />
          <Hamburger toggled={false} toggle={toggleMenu} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
