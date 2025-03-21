
import { useState } from "react";
import "../styles/index.css"
import "./Header.css";
// import MainPage from "../../MainPage";
// import AboutUs from "../../AboutUs";
// import { Route, Routes, Link, BrowserRouter } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(true)
  const isOpen = open ? '' : 'open'
  return (
    <>
      <header className="container">

        <a href="/MainPage">
          <img src='./ImgForHome/Logo.svg' alt="logo" target='_blank' />
        </a>

        <nav className={`${isOpen}`}>
          <div className="header-info">
            <ul>
              <li><a href="/AboutUs">About us</a></li>
              <li><a href="/ServicesPage" >Services</a></li>
              <li><a href="/UseCasesPage" >Use Cases</a></li>
              <li><a href="/PricingPage" >Pricing</a></li>
              <li><a href="/BlogPage" >Blog</a></li>
              <li ><a href="/RequestAQuote" className="specialButton">Request a quote</a></li>
            </ul>

          </div>
        </nav>
        <div className={`burger ${open ? '' : 'Active'}`} onClick={() => { setOpen(!open) }}>
          <span></span>
        </div>
      </header>





    </>
  );
}

export default Header;
