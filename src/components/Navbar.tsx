// src/components/Navbar.tsx (VERSIÓN MODIFICADA)

import React from 'react';
import './Navbar.css';
import LanguageSelector from './LanguageSelector';
import ThemeToggleButton from './ThemeToggleButton';


const Navbar = () => {
  return (
    <nav className="navbar-container">
      {/* Sección de enlaces de navegación */}
      <div className="navbar-links">
        {/* CAMBIO: Envolvemos cada texto en un <span> */}
        <a href="#proyectos"><span>Proyectos</span></a>
        <a href="#servicios"><span>Servicios</span></a>
        <a href="#sobre-mi"><span>Sobre mí</span></a>
        <a href="#contacto"><span>Contáctame</span></a>
      </div>

      {/* Sección de controles con tus componentes */}
      <div className="navbar-controls">
        <LanguageSelector />
        <ThemeToggleButton />
      </div>
    </nav>
  );
};

export default Navbar;