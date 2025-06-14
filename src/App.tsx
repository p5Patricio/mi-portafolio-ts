import React, { useState, useEffect } from 'react';
import './App.css'; 
import logo from './assets/LogosinFondo.png'; 
import AppContent from './AppContent';
// 1. Importa tu nuevo componente de borde
import PageBorder from './components/PageBorder'; 

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFinishing, setIsFinishing] = useState(false);

  useEffect(() => {
    // ... (la lógica de los temporizadores sigue igual)
    const finishTimer = setTimeout(() => {
      setIsFinishing(true);
    }, 1500);

    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(finishTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  return (
    <div className="app-wrapper">
      <img
        src={logo}
        className={`persistent-logo ${isFinishing ? 'finished' : ''}`}
        alt="Logo principal de mi portafolio"
      />

      {isLoading && <div className="splash-veil"></div>}
      
      {/* 2. Renderiza el borde y el contenido cuando la carga termina */}
      {!isLoading && (
        <>
          <PageBorder />
          <AppContent />
        </>
      )}
    </div>
  );
}

export default App;