import React from 'react';
import '../index.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <a href="#home" className="logo">Jean Pierre</a>
      <nav className="navbar">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#education" className="nav-link">Education</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
