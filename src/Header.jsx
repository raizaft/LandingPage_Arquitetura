import React, { useState } from "react";
import "./Header.css";
import NavBar from "./NavBar.jsx";
import Menu from "./Menu.jsx";
import Carrossel from "./Carrossel.jsx";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <NavBar toggleMenu={toggleMenu} />
        {isMenuOpen && <Menu />}
        <Carrossel />
      </header>
    </>
  );
}

export default Header;
