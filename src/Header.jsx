// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Logo from "/Logo.svg";
import "./App.css";

function Header() {
  return (
    <>
      <header class="container">
        <a href="">
          <img src={Logo} alt="logo" />
        </a>
        <nav>
          <div class="header-info">
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Use Cases</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
            <div class="specialButton">
              <a href="#">Request a quote</a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
