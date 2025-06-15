import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

// Le decimos al componente que puede recibir una prop opcional 'className'
const ThemeToggleButton = ({ className }: { className?: string }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    // Aplicamos la className que recibimos al botón
    <button onClick={toggleTheme} className={className}>
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggleButton;