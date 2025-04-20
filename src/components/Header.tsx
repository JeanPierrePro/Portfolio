import React from 'react';


const Header: React.FC = () => {
  return (
    <header className="header">
      <a href="#" className="logo">Jean Pierre Antunes</a>
      <i className='bx bx-menu' id="menu" style={{ color: '#fff' }}></i>
      <nav className="navbar">
        <a href="#home" style={{ '--vlr': 1 } as React.CSSProperties} className="active">Home</a>
        <a href="#about" style={{ '--vlr': 2 } as React.CSSProperties}>About Me</a>
        <a href="#education" style={{ '--vlr': 3 } as React.CSSProperties}>Education</a>
        <a href="#skills" style={{ '--vlr': 4 } as React.CSSProperties}>Skills</a>
        <a href="#contact" style={{ '--vlr': 5 } as React.CSSProperties}>Contact Me</a>
      </nav>
    </header>
  );
};

export default Header;