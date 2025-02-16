import "./Header.css";

function Header() {
  return (
    <div id="header">
      <div id="header-container">
        <div id="header-logo"></div>
        <a className="header-nav" href="">
          Features
        </a>
        <a className="header-nav" href="">
          Solutions
        </a>
        <a className="header-nav" href="">
          Resources
        </a>
        <a className="header-nav" href="">
          Pricing
        </a>
        <a className="header-login" href="">
          Login
        </a>
        <div className="header-signup">Start Your Free Trial</div>
      </div>
    </div>
  );
}

export default Header;
