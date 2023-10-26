import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";
import DefaultForm from "./Forms.jsx";
import FooterWithSocialMediaIcons from "./Footer.jsx";
import Cards from "./Cards.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Cards />
    <h1>Peça um orçamento!</h1>
    <div className="form">
      <DefaultForm className="w-500" />
    </div>
    <FooterWithSocialMediaIcons />
  </React.StrictMode>
);
