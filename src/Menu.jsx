import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <div id="menu">
      <div className="espacamento"></div>
      <div className="itemmenu">
        <p>SOBRE O NODA</p>
      </div>
      <div className="menuline"></div>
      <div className="itemmenu">
        <p>PROJETOS COMERCIAIS</p>
      </div>
      <div className="menuline"></div>
      <div className="itemmenu">
        <p>PROJETOS RESIDENCIAIS</p>
      </div>
      <div className="menuline"></div>
      <div className="itemmenu">
        <p>CONTATO</p>
      </div>
      <div className="espacamento"></div>
    </div>
  );
}

export default Menu;
