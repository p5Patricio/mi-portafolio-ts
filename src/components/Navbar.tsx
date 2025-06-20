// src/components/Navbar.tsx (VERSIÓN FINAL CON INICIO CONDICIONAL)

import React from 'react';
// CAMBIO: Importa el hook useLocation y Link (si no lo tenías ya)
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import LanguageSelector from './LanguageSelector';
import ThemeToggleButton from './ThemeToggleButton'; // Asumo que este es tu componente de tema

const Navbar = () => {
  // CAMBIO: Dentro del componente, obtenemos la ubicación actual
  const location = useLocation();

  return (
    <nav className="navbar-container">
      <div className="navbar-links">
        {/*
          CAMBIO: Añadimos el Link a "Inicio" de forma condicional.
          Esta línea significa: "Si (&&) la ruta actual (location.pathname)
          es diferente a la raíz ('/'), entonces muestra este componente Link".
        */}
        {location.pathname !== '/' && (
          <Link to="/"><span>Inicio</span></Link>
        )}

        {/* El resto de tus enlaces sigue igual */}
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