import React from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';

// CAMBIO IMPORTANTE: Renombra la función de App a AppContent
function AppContent() {
  return (
    // Más adelante aquí añadiremos la clase para el fade-in
    <div className="App fade-in">
      <Navbar />
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

// CAMBIO IMPORTANTE: Exporta AppContent
export default AppContent;