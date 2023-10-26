import React, { useState } from "react";
import "./Header.css";
import NavbarWithCTAButton from "./NavBar.jsx";
import Carrossel from "./Carrossel.jsx";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header() {
  return (
    <>
      <ToastContainer />
      <header>
        <NavbarWithCTAButton />
        <Carrossel />
      </header>
    </>
  );
}

export default Header;
