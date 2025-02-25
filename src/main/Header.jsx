
import "./styles/index.css"
import "./styles/Header.css";

function Header() {
  return (
    <>
      <header className="container">
        <a href="">
          <img src='/Logo.svg' alt="logo" />
        </a>
        <nav>
          <div className="header-info">
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Use Cases</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
            <div className="specialButton">
              <a href="#">Request a quote</a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
