import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Archivo de traducciones
const resources = {
  es: {
    translation: {
      "welcomeTitle": "Hola mundo",
      "welcomeSubtitle": "Soy un ingeniero de software y desarrollador backend",
      "Proyectos": "Proyectos",
      "Sobremi": "Sobre mí",
      "Servicios": "Servicios",
      "changeToEnglish": "Switch to English",
      "changeToSpanish": "Cambiar a Español"
    }
  },
  en: {
    translation: {
      "welcomeTitle": "Hello world",
      "welcomeSubtitle": "I am a software engineer and backend developer",
      "Proyectos": "Projects",
      "Sobremi": "About me",
      "Servicios": "Services",
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