import React from "react";
import { Button, Navbar, Tooltip } from "flowbite-react";

function NavbarWithCTAButton() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="#">
        <img src="img/logo.png" className="mr-3 h-6 sm:h-9" alt="logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Tooltip
          content="Envie um email pedindo um orçamento!"
          placement="left"
        >
          <Button className="bg-yellow-500" href="#">
            Orçar
          </Button>
        </Tooltip>
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
