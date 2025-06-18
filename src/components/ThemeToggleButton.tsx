// src/components/ThemeToggleButton.tsx (VERSIÓN MODIFICADA)

import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

// Este componente ahora tendrá sus propios estilos, no necesita className
const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    // El label activa el input al hacer clic en él
    <label htmlFor="theme-toggle-checkbox" className="theme-toggle-slider">
      {/* Usamos un checkbox real (pero oculto) para manejar el estado */}
      <input
        id="theme-toggle-checkbox"
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      {/* Estos divs son solo para la parte visual y la animación */}
      <div className="slider-track">
        <div className="slider-nub">
          <div className="icon moon">🌙</div>
          <div className="icon sun">☀️</div>
        </div>
      </div>
    </label>
  );
};

export default ThemeToggleButton;