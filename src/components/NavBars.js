import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../img/LOGO.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <img src={logo} className="logo" alt="logo" />
      <span className="navtext">Govind Sharma</span>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#About" className="nav-button scroll-link" onClick={closeMenu}>About</a>
        <a href="#Education" className="nav-button scroll-link" onClick={closeMenu}>Vision</a>
        <a href="#Experience" className="nav-button scroll-link" onClick={closeMenu}>Experience</a>
        <a href="#Projects" className="nav-button scroll-link" onClick={closeMenu}>Projects</a>
        <a href="#Skills" className="nav-button scroll-link" onClick={closeMenu}>Skills</a>
        <a href="#Hobbies" className="nav-button scroll-link" onClick={closeMenu}>Hobbies</a>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
