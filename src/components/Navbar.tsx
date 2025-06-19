// src/components/Navbar.tsx (VERSIÓN MODIFICADA Y SIMPLE)

import React from 'react';
import { Link } from 'react-router-dom'; // 1. Importa Link
import './Navbar.css';
import LanguageSelector from './LanguageSelector';
import ThemeToggleButton from './ThemeToggleButton';


const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-links">
        {/* 2. Cambiamos <a> por <Link> y href por to */}
        <Link to="/proyectos"><span>Proyectos</span></Link>
        <Link to="/servicios"><span>Servicios</span></Link>
        <Link to="/sobre-mi"><span>Sobre mí</span></Link>
        <Link to="/contacto"><span>Contáctame</span></Link>
      </div>

      <div className="navbar-controls">
        <LanguageSelector />
        <ThemeToggleButton />
      </div>
    </nav>
  );
};

export default Navbar;