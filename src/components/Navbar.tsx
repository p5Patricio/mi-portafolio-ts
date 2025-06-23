// src/components/Navbar.tsx (VERSIÓN FINAL CON INICIO CONDICIONAL)

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import LanguageSelector from './LanguageSelector';
import ThemeToggleButton from './ThemeToggleButton'; // Asumo que este es tu componente de tema
import { useTranslation } from 'react-i18next';
import { CSSTransition } from 'react-transition-group';

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // REGLA MAESTRA: Si estamos en la cima, siempre visible.
    if (currentScrollY === 0) {
      setIsVisible(true);
      lastScrollY.current = 0;
      return;
    }

    // Si la última posición registrada es menor que la actual, estamos bajando.
    if (currentScrollY > lastScrollY.current) {
      setIsVisible(false); // Ocultar
    } else {
      setIsVisible(true); // Mostrar
    }

    lastScrollY.current = currentScrollY;
  }, []);

  // La lógica del mouse ahora es más simple: solo se encarga de mostrar la barra
  // si está oculta y el cursor está arriba. No se encarga de ocultarla.
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (e.clientY < 70 && !isVisible) {
      setIsVisible(true);
    }
  }, [isVisible]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);

    // 4. Limpiamos el listener cuando el componente se desmonta
    return () => {
     window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleScroll, handleMouseMove]); // El array vacío asegura que esto se ejecute solo una vez

  return (
    <nav className={`navbar-container ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="navbar-links">
        <CSSTransition
          in={location.pathname !== '/'} // La condición para mostrar/ocultar
          timeout={400}                   // Duración de la animación en milisegundos
          classNames="inicio-btn"         // Prefijo para las clases CSS de la animación
          unmountOnExit                   // Desmonta el componente cuando no es visible
        >
          <NavLink to="/"><span>{t('Inicio')}</span></NavLink>
        </CSSTransition>

        {/* El resto de tus enlaces sigue igual */}
        <NavLink to="/proyectos"><span>{t('Proyectos')}</span></NavLink>
        <NavLink to="/servicios"><span>{t('Servicios')}</span></NavLink>
        <NavLink to="/sobre-mi"><span>{t('Sobremi')}</span></NavLink>
        <NavLink to="/contacto"><span>{t('contact')}</span></NavLink>
      </div>

      <div className="navbar-controls">
        <LanguageSelector />
        <ThemeToggleButton />
      </div>
    </nav>
  );
};

export default Navbar;