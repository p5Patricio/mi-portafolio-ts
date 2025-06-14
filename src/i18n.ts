import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Archivo de traducciones
const resources = {
  es: {
    translation: {
      "welcomeTitle": "Bienvenido a mi Portafolio",
      "welcomeSubtitle": "Esta es la página de inicio, ¡construida con React y TypeScript!",
      "changeToEnglish": "Switch to English",
      "changeToSpanish": "Cambiar a Español"
    }
  },
  en: {
    translation: {
      "welcomeTitle": "Welcome to my Portfolio",
      "welcomeSubtitle": "This is the home page, built with React and TypeScript!",
      "changeToEnglish": "Switch to English",
      "changeToSpanish": "Cambiar a Español"
    }
  }
};

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador del usuario
  .use(initReactI18next) // Conecta i18next con React
  .init({
    resources,
    fallbackLng: 'es', // Idioma por defecto si la detección falla
    interpolation: {
      escapeValue: false // React ya protege contra XSS
    }
  });

export default i18n;