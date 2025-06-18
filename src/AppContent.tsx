import React from 'react';
import './App.css';
import Home from './pages/Home';
import ThemeToggleButton from './components/ThemeToggleButton';
import LanguageSelector from './components/LanguageSelector';

// CAMBIO IMPORTANTE: Renombra la función de App a AppContent
function AppContent() {
  return (
    // Más adelante aquí añadiremos la clase para el fade-in
    <div className="App fade-in">
      <ThemeToggleButton className="theme-toggle-button" />
      <header className="App-header">
        <Home />
        <p>
          <LanguageSelector />
        </p>
      </header>
    </div>
  );
}

// CAMBIO IMPORTANTE: Exporta AppContent
export default AppContent;