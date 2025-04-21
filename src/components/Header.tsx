import React, { useState } from 'react';
import '../index.css';  // Garanta que você importou o arquivo de estilos CSS

const Header: React.FC = () => {
  // Estado para controlar a visibilidade do menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Logo */}
      <a href="#" className="logo">Jean Pierre Antunes</a>

      {/* Ícone de Menu Hambúrguer */}
      <i className="bx bx-menu menu-icon" onClick={toggleMenu}></i>

      {/* Navbar com a classe 'show' quando o menu estiver aberto */}
      <nav className={`navbar ${isMenuOpen ? 'show' : ''}`}>
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About Me</a>
        <a href="#education" className="nav-link">Education</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#contact" className="nav-link">Contact Me</a>
      </nav>
    </header>
  );
};

export default Header;
