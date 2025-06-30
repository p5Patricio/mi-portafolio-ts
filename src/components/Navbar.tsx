import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import LanguageSelector from './LanguageSelector';
import ThemeToggleButton from './ThemeToggleButton';
import { useTranslation } from 'react-i18next';
import { CSSTransition } from 'react-transition-group';
import { Menu, X } from 'lucide-react'; // Íconos para el menú móvil

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY === 0) {
      setIsVisible(true);
      lastScrollY.current = 0;
      return;
    }

    if (currentScrollY > lastScrollY.current) {
      setIsVisible(false); // Ocultar
    } else {
      setIsVisible(true); // Mostrar
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar-container ${isVisible ? 'visible' : 'hidden'}`}>
      
      {/* BOTÓN HAMBURGUESA (SOLO MÓVIL) */}
      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* LINKS PARA ESCRITORIO */}
      <div className="navbar-links desktop-only">
        <CSSTransition
          in={location.pathname !== '/'}
          timeout={400}
          classNames="inicio-btn"
          unmountOnExit
        >
          <NavLink to="/" onClick={closeMobileMenu}>
            <span>{t('Inicio')}</span>
          </NavLink>
        </CSSTransition>
        <NavLink to="/proyectos" onClick={closeMobileMenu}>
          <span>{t('Proyectos')}</span>
        </NavLink>
        <NavLink to="/servicios" onClick={closeMobileMenu}>
          <span>{t('Servicios')}</span>
        </NavLink>
        <NavLink to="/sobre-mi" onClick={closeMobileMenu}>
          <span>{t('Sobremi')}</span>
        </NavLink>
        <NavLink to="/contacto" onClick={closeMobileMenu}>
          <span>{t('contact')}</span>
        </NavLink>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {isMobileMenuOpen && (
        <div className="navbar-links mobile-menu">
          <NavLink to="/" onClick={closeMobileMenu}>
            <span>{t('Inicio')}</span>
          </NavLink>
          <NavLink to="/proyectos" onClick={closeMobileMenu}>
            <span>{t('Proyectos')}</span>
          </NavLink>
          <NavLink to="/servicios" onClick={closeMobileMenu}>
            <span>{t('Servicios')}</span>
          </NavLink>
          <NavLink to="/sobre-mi" onClick={closeMobileMenu}>
            <span>{t('Sobremi')}</span>
          </NavLink>
          <NavLink to="/contacto" onClick={closeMobileMenu}>
            <span>{t('contact')}</span>
          </NavLink>
        </div>
      )}

      {/* CONTROLES DE IDIOMA Y TEMA */}
      <div className="navbar-controls">
        <LanguageSelector />
        <ThemeToggleButton />
      </div>
    </nav>
  );
};

export default Navbar;
