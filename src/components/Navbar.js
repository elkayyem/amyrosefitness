import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${isHomePage ? 'navbar-transparent' : ''}`}>
      <Link to="/" className="logo">amyrosefitness</Link>
      <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/services">Services</Link>
        <Link to="/success-stories">Success stories</Link>
        <Link to="/about">About me</Link>
      </div>
    </nav>
  );
};

export default Navbar;
