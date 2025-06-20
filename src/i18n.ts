import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Archivo de traducciones
// En tu archivo src/i18n.ts

const resources = {
  es: {
    translation: {
      // Tus otras traducciones generales...
      "welcomeTitle": "Hola mundo",
      "Proyectos": "Proyectos",
      "Sobremi": "Sobre mí",
      "Servicios": "Servicios",

      // --- NUEVO OBJETO PARA LA PRESENTACIÓN ---
      "presentation": {
        "line1_iam": "Soy",
        "line1_role": "INGENIERO DE",
        "line2_specialty": "SOFTWARE",
        "conjunction": "&", // Movimos la '&' a su propia clave
        "line3_role": "DESARROLLADOR", // Primera parte del rol
        "line4_specialty": "BACKEND" // Segunda parte del rol
      },
      "aboutSection": {
        "title": "Sobre Mí",
        "bio": "A punto de egresar de la carrera de Ingeniería en Software de la Universidad de Guanajuato, combino una sólida formación académica con una pasión por la construcción de soluciones tecnológicas eficientes y escalables.",
        "languages": "Lenguajes",
        "learning": "Actualmente Aprendiendo",
        "tools": "Herramientas y Tecnologías",
        "methodologies": "Metodologías"
      }
    }
  },
  en: {
    translation: {
      // Tus otras traducciones generales...
      "welcomeTitle": "Hello world",
      "Proyectos": "Projects",
      "Sobremi": "About me",
      "Servicios": "Services",

      // --- NUEVO OBJETO PARA LA PRESENTACIÓN ---
      "presentation": {
        "line1_iam": "I'm a",
        "line1_role": "SOFTWARE",
        "line2_specialty": "ENGINEER",
        "conjunction": "&",
        "line3_role": "BACKEND",
        "line4_specialty": "DEVELOPER"
      },
      "aboutSection": {
        "title": "About Me",
        "bio": "About to graduate with a degree in Software Engineering from the University of Guanajuato, I combine a solid academic background with a passion for building efficient and scalable technological solutions.",
        "languages": "Languages",
        "learning": "Currently Learning",
        "tools": "Tools & Technologies",
        "methodologies": "Methodologies"
      }
    }
  }
};


// ... el resto de tu archivo i18n.init({...}) no necesita cambios.

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