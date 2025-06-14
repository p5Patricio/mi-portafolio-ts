import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
// La ruta a TextCursor puede variar según tu estructura, ajústala si es necesario
import TextCursor from './TextAnimations/TextCursor/TextCursor'; 
import ThemeToggleButton from './components/ThemeToggleButton';
import LanguageSelector from './components/LanguageSelector';

// CAMBIO IMPORTANTE: Renombra la función de App a AppContent
function AppContent() {
  return (
    // Más adelante aquí añadiremos la clase para el fade-in
    <div className="App fade-in">
      <header className="App-header">
        <TextCursor 
                text="."
                delay={0.01}
                spacing={80}
                followMouseDirection={true}
                randomFloat={true}
                exitDuration={0.3}
                removalInterval={20}
                maxPoints={4}
          />
        <Home />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          <ThemeToggleButton />
          <LanguageSelector />
        </p>
        <a // Corregí un error de sintaxis que tenías aquí
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// CAMBIO IMPORTANTE: Exporta AppContent
export default AppContent;