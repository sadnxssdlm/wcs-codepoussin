import { Link } from "react-router";
import "../assets/styles/Header.css";
import { useState } from "react";

function Header() {
  // burger menu
  const [showLinks, setShowLinks] = useState<boolean>(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleCloseMenu = () => {
    setShowLinks(false);
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <header className={`header ${showLinks ? "show-nav" : "hide-nav"}`}>
      <img src="logo-header.png" alt="Logo de poussin" />
      <h1>Code Poussin</h1>
      <button type="button" className="burger-menu" onClick={handleShowLinks}>
        <span />
      </button>
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={handleCloseMenu}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleCloseMenu}>
              À propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
