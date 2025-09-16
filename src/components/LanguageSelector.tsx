// src/components/LanguageSelector.tsx

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = {
    es: 'Español',
    en: 'English',
  };

  // ✨ CAMBIO CLAVE AQUÍ: Obtenemos el código de idioma base (ej. "es" de "es-MX")
  const currentLanguageCode = i18n.language.split('-')[0] as keyof typeof languages;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

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
    <div className="language-selector" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="language-toggle-button">
        {/* Usamos la nueva variable para mostrar siempre el idioma correcto */}
        {languages[currentLanguageCode]}
        <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
      </button>

      {isOpen && (
        <ul className="language-menu">
          {Object.entries(languages).map(([code, name]) => (
            <li key={code}>
              <button onClick={() => changeLanguage(code)} disabled={currentLanguageCode === code}>
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