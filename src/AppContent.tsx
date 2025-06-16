import React from 'react';
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
      <ThemeToggleButton className="theme-toggle-button" />
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
        <p>
          <LanguageSelector />
        </p>
      </header>
    </div>
  );
}

// CAMBIO IMPORTANTE: Exporta AppContent
export default AppContent;