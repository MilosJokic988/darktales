import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaKey, FaBookDead, FaGhost } from 'react-icons/fa';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="gothic-header">
      <div className="header-container">
        <h1 className="site-title"></h1>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>

        <nav className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <Link to="/" onClick={closeMenu}><FaHome /> Home</Link>
          <Link to="/encyclopedia" onClick={closeMenu}><FaBook /> Encyclopedia</Link>
          <Link to="/symbols" onClick={closeMenu}><FaKey /> Symbols</Link>
          <Link to="/forbidden-books" onClick={closeMenu}><FaBookDead /> Forbidden Books</Link>
          <Link to="/dark-tales" onClick={closeMenu}><FaGhost /> Dark Tales</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
