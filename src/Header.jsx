
import Logo from "/Logo.svg";
import "./styles/Header.css";

function Header() {
  return (
    <>
      <div class="container">
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
      </div>
    </>
  );
}

export default Header;
