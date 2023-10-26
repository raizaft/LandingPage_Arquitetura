import React from "react";
import { Button, Navbar } from "flowbite-react";

function NavbarWithCTAButton() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="#">
        <img src="img/logo.png" className="mr-3 h-6 sm:h-9" alt="logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="bg-yellow-500" href="#">
          Peça um orçamento!
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active className="text-yellow-500">
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Sobre o NODA</Navbar.Link>
        <Navbar.Link href="#">Portfolio</Navbar.Link>
        <Navbar.Link href="#">Contato</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarWithCTAButton;
