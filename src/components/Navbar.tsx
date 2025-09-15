// src/components/Navbar.tsx

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CSSTransition } from 'react-transition-group';
import './Navbar.css';
import LanguageSelector from './LanguageSelector';
import ThemeToggleButton from './ThemeToggleButton';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY === 0) {
      setIsVisible(true);
      lastScrollY.current = 0;
      return;
    }
    if (currentScrollY > lastScrollY.current) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    lastScrollY.current = currentScrollY;
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (e.clientY < 70 && !isVisible) {
      setIsVisible(true);
    }
  }, [isVisible]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleScroll, handleMouseMove]);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (  
    <nav className={`navbar-container ${isVisible ? 'visible' : 'hidden'}`}>

      {/* Links versión escritorio */}
      <div className="navbar-links desktop-only">
        <CSSTransition in={location.pathname !== '/'} timeout={400} classNames="inicio-btn" unmountOnExit>
          <NavLink to="/"><span>{t('Inicio')}</span></NavLink>
        </CSSTransition>
        <NavLink to="/proyectos"><span>{t('Proyectos')}</span></NavLink>
        <NavLink to="/servicios"><span>{t('Servicios')}</span></NavLink>
        <NavLink to="/sobre-mi"><span>{t('Sobremi')}</span></NavLink>
        <NavLink to="/contacto"><span>{t('contact')}</span></NavLink>
      </div>

      {/* Controles versión escritorio */}
      <div className="navbar-controls desktop-only">
        <LanguageSelector />
        <ThemeToggleButton />
      </div>

      <div className="mobile-header-controls">
        <LanguageSelector /> {/* El selector de idioma ahora también estará aquí */}
        <ThemeToggleButton />
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Menú hamburguesa (móvil) */}
      <CSSTransition
        in={menuOpen}
        timeout={300}
        classNames="mobile-menu-animation"
        unmountOnExit
      >
        <div className="mobile-menu">
          <NavLink to="/" onClick={toggleMenu}><span>{t('Inicio')}</span></NavLink>
          <NavLink to="/proyectos" onClick={toggleMenu}><span>{t('Proyectos')}</span></NavLink>
          <NavLink to="/servicios" onClick={toggleMenu}><span>{t('Servicios')}</span></NavLink>
          <NavLink to="/sobre-mi" onClick={toggleMenu}><span>{t('Sobremi')}</span></NavLink>
          <NavLink to="/contacto" onClick={toggleMenu}><span>{t('contact')}</span></NavLink>
          
          {/* ✨ ELIMINAMOS EL ThemeToggleButton DE AQUÍ ✨ */}
          {/* El LanguageSelector puede quedarse o quitarse, según prefieras */}
          {/* En este ejemplo lo dejamos para que se vea en ambos sitios. */}
          <div className="mobile-menu-controls">
             {/* <LanguageSelector />  // Decide si lo quieres aquí también */}
          </div>
        </div>
      </CSSTransition>
    </nav>
  );
};

export default Navbar;
