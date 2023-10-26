import React, { useState } from "react";
import "./Header.css";
import NavbarWithCTAButton from "./NavBar.jsx";
import Carrossel from "./Carrossel.jsx";

function Header() {
  return (
    <>
      <header>
        <NavbarWithCTAButton />
        <Carrossel />
      </header>
    </>
  );
}

export default Header;
