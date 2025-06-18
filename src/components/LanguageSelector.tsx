import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Un objeto para mapear los códigos de idioma a sus nombres completos
  const languages = {
    es: 'Español',
    en: 'English',
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Cierra el menú al seleccionar
  };

  // Efecto para manejar el clic fuera del componente
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    // Añadimos una clase y la referencia para el clic exterior
    <div className="language-selector" ref={dropdownRef}>
      {/* Este es el botón que siempre se ve */}
      <button onClick={() => setIsOpen(!isOpen)} className="language-toggle-button">
        {languages[i18n.language as keyof typeof languages]}
        <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
      </button>

      {/* El menú desplegable que aparece y desaparece */}
      {isOpen && (
        <ul className="language-menu">
          {Object.entries(languages).map(([code, name]) => (
            <li key={code}>
              <button onClick={() => changeLanguage(code)} disabled={i18n.language === code}>
                {name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;