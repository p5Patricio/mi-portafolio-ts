// src/App.tsx

// CAMBIO: Importa useMemo
import React, { useState, useEffect, useContext, useMemo } from 'react';
import { Link } from 'react-router-dom'
import './App.css'; 
import AppContent from './AppContent';
import Particles from './components/Particles';
import { ThemeContext } from './context/ThemeContext';
import logoDarkTheme from './assets/LogoDark.png'; 
import logoLightTheme from './assets/LogoLight.png';
import ClickSpark from './components/ClickSpark';

// CAMBIO: Mueve estas definiciones fuera del componente.
// Al ser constantes, no necesitan ser recreadas en cada render.
const darkThemeParticleColors = ['#0747a1', '#ffffff'];
const lightThemeParticleColors = ['#000000', '#7600bc'];
const darkThemeClickSpark = '#ffffff';
const lightThemeClickSpark = '#000000';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFinishing, setIsFinishing] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    // La lógica de los temporizadores sigue igual, está perfecta.
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

  // CAMBIO: Usa useMemo para que el array de colores solo se recalcule si el 'theme' cambia.
  // Esto evita crear un nuevo array en los re-renders causados por isLoading o isFinishing.
  const particleColors = useMemo(() => {
    return theme === 'dark' ? darkThemeParticleColors : lightThemeParticleColors;
  }, [theme]);

  const ClickSparkColors = useMemo(() => {
    return theme === 'dark' ? darkThemeClickSpark : lightThemeClickSpark;
  }, [theme]);

  return (
    <div className="app-wrapper">
      <ClickSpark
        sparkColor={ClickSparkColors}
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Particles
          particleColors={particleColors}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
        
      <Link to="/" className={`persistent-logo-link ${isFinishing ? 'finished' : ''}`}>
          <img
            src={theme === 'dark' ? logoDarkTheme : logoLightTheme}
            className="persistent-logo-image"
            alt="Logo principal de mi portafolio - Ir a Inicio"
          />
        </Link>

      {isLoading && <div className="splash-veil"></div>}
      
      {!isLoading && (
        <>
          <AppContent />
        </>
      )}
      </ClickSpark>
    </div>
  );
}

export default App;