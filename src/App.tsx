import React, { useState, useEffect, useContext } from 'react';
import './App.css'; 
import AppContent from './AppContent';
import Particles from './components/Particles';
import { ThemeContext } from './context/ThemeContext';
import logoDarkTheme from './assets/LogoDark.png'; 
import logoLightTheme from './assets/LogoLight.png';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFinishing, setIsFinishing] = useState(false);

  const { theme } = useContext(ThemeContext);

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

  const darkThemeParticleColors = ['#61dafb', '#ffffff']; // Azul y blanco para el tema oscuro
  const lightThemeParticleColors = ['#000000', '#7600bc']; // Negro y un gris oscuro para el tema claro

  return (
    <div className="app-wrapper">
        <Particles
          particleColors={theme === 'dark' ? darkThemeParticleColors : lightThemeParticleColors}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      <img
        // Usamos un operador ternario para decidir qué logo mostrar
        src={theme === 'dark' ? logoDarkTheme : logoLightTheme}
        className={`persistent-logo ${isFinishing ? 'finished' : ''}`}
        alt="Logo principal de mi portafolio"
      />

      {isLoading && <div className="splash-veil"></div>}
      
      {/* 2. Renderiza el borde y el contenido cuando la carga termina */}
      {!isLoading && (
        <>
          <AppContent />
        </>
      )}
    </div>
  );
}

export default App;