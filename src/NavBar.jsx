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
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className="text-yellow-500">
          Sobre o NODA
        </Navbar.Link>
        <Navbar.Link href="#" className="text-yellow-500">
          Portfolio
        </Navbar.Link>
        <Navbar.Link href="#" className="text-yellow-500">
          Contato
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarWithCTAButton;
