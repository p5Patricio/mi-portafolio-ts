// src/App.tsx

// CAMBIO 1: Importa useRef
import React, { useState, useEffect, useContext, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 
import AppContent from './AppContent';
import Particles from './components/Particles';
import { ThemeContext } from './context/ThemeContext';
import logoDarkTheme from './assets/LogoDark.png'; 
import logoLightTheme from './assets/LogoLight.png';
import ClickSpark from './components/ClickSpark';

const darkThemeParticleColors = ['#ff9191', '#ffffff'];
const lightThemeParticleColors = ['#000000', '#1e6ed7'];
const darkThemeClickSpark = '#ff9191'; 
const lightThemeClickSpark = '#1e6ed7';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFinishing, setIsFinishing] = useState(false);
  const { theme } = useContext(ThemeContext);
  
  // CAMBIO 2: Crea una referencia para rastrear si el efecto ya se ejecutó
  const effectRan = useRef(false);

  // useEffect para manejar la animación del SplashScreen
  useEffect(() => {
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

  // useEffect para registrar la visita en Google Sheets.
  useEffect(() => {
    // CAMBIO 3: Añade la condición para evitar la doble ejecución
    // Solo se ejecutará si la bandera es 'false'
    if (effectRan.current === false) {
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxzocTFqUDfWB5kOS6kz592Pmr9FolIgbGFInN7qUCHreYP52zE4W1YKr4YJKEFdatSHA/exec';

      fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      })
      .catch(err => console.log('Error al registrar visita:', err));
    
      // CAMBIO 4: Marca la bandera como 'true' después de la primera ejecución
      return () => {
        effectRan.current = true;
      };
    }
  }, []); // El array vacío sigue siendo correcto

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