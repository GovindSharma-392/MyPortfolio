import React from 'react';
import '../styles/Navbar.css';
import logo from '../img/LOGO.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="logo" alt="logo" />
      <span className="navtext">Govind Sharma</span>
      <a href="/" className="nav-button scroll-link">About</a>
      <a href="/Education" className="nav-button scroll-link">Vision</a>
      <a href="/Experience" className="nav-button scroll-link">Experience</a>
      <a href="/Projects" className="nav-button scroll-link">Projects</a>
      <a href="/Skills" className="nav-button scroll-link">Skills</a>
      <a href="/Hobbies" className="nav-button scroll-link">Hobbies</a>
    </nav>
  );
}

export default Navbar;
