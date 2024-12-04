import React from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <button 
      className={`hamburger ${isOpen ? 'open' : ''}`} 
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </button>
  );
};

export default HamburgerMenu;
