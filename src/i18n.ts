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
      "Inicio": "Inicio",
      "Proyectos": "Proyectos",
      "Sobremi": "Sobre mí",
      "Servicios": "Servicios",
      "contact": "Contacto",

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
        "title": "Hola Mundo",
        "bio": "Mi nombre es Patricio Antonio García Pérez Vela, soy un estudiante a punto de egresar de la carrera de Ingeniería en Software de la Universidad de Guanajuato, combino mi formación académica con una pasión por la construcción de soluciones tecnológicas eficientes y escalables.",
        "languages": "Lenguajes",
        "learning": "Actualmente Aprendiendo",
        "tools": "Herramientas y Tecnologías",
        "methodologies": "Metodologías"
      },
      "servicesPage": {
        "title": "Mis Servicios",
        "webDevTitle": "Desarrollo Web a la Medida",
        "webDevDesc": "Desde páginas de presentación impactantes hasta aplicaciones web interactivas y responsivas. Transformo tus ideas en experiencias digitales únicas que no solo se ven increíbles, sino que también ofrecen un rendimiento excepcional.",
        "aiTitle": "Soluciones de Software e IA",
        "aiDesc": "Más allá de la web. Diseño y construyo soluciones de software robustas, incluyendo la integración de modelos de Machine Learning e Inteligencia Artificial para automatizar procesos, analizar datos y llevar tus proyectos al siguiente nivel tecnológico.",
        "cta": "Hablemos de tu proyecto"
      },
      "contactPage": {
        "title": "Ponte en Contacto",
        "intro": "Siempre estoy abierto a conectar. Si tienes una pregunta, una oportunidad de colaboración o simplemente quieres saludar, no dudes en contactarme a través de estos canales o descargar mi CV.",
        "github": "GitHub",
        "linkedin": "LinkedIn",
        "emailAddress": "pa.garciaperezvela@ugto.mx",
        "emailAction": "Copiar Correo",
        "emailCopied": "¡Copiado!",
        "downloadCV": "Descargar CV",
        "cvDownloaded": "¡CV Descargado!" 
      },
      "projectsPage": {
        "title": "Mis Proyectos",
        "fitodex_title": "Fitodex",
        "fitodex_desc": "Plataforma web para la identificación y consulta de plantas, donde desarrollé el backend completo con Node.js y Express, y participé en la maquetación del frontend.",
        "lsm_title": "Traductor en Tiempo Real de LSM",
        "lsm_desc": "Aplicación que utiliza la cámara para capturar señas de la Lengua de Señas Mexicana (LSM) y las traduce a texto en tiempo real mediante un modelo de IA.",
        "nba_title": "Clasificador de Roles en la NBA",
        "nba_desc": "Sistema basado en Machine Learning que analiza estadísticas de jugadores de la NBA para clasificarlos en roles modernos y generar planes de entrenamiento personalizados.",
        "art_title": "Clasificador de Arte con MLP",
        "art_desc": "Un Perceptrón Multicapa (MLP) entrenado para clasificar obras de arte en diferentes estilos (ej. Impresionismo, Cubismo) a partir de una imagen.",
        "viewOnGithub": "Ver en GitHub",
        "viewWebsite": "Ver Página" 
      }
    }
  },
  en: {
    translation: {
      // Tus otras traducciones generales...
      "welcomeTitle": "Hello world",
      "Inicio": "Home",
      "Proyectos": "Projects",
      "Sobremi": "About me",
      "Servicios": "Services",
      "contact": "Contact",

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
        "title": "Hello World",
        "bio": "My name is Patricio Antonio García Pérez Vela, I am a software engineering student about to graduate from the University of Guanajuato. I combine my academic training with a passion for building efficient and scalable technological solutions.",
        "languages": "Languages",
        "learning": "Currently Learning",
        "tools": "Tools & Technologies",
        "methodologies": "Methodologies"
      },
       "servicesPage": {
        "title": "My Services",
        "webDevTitle": "Custom Web Development",
        "webDevDesc": "From impactful landing pages to interactive and responsive web applications. I transform your ideas into unique digital experiences that not only look incredible but also offer exceptional performance.",
        "aiTitle": "Software & AI Solutions",
        "aiDesc": "Beyond the web. I design and build robust software solutions, including the integration of Machine Learning and Artificial Intelligence models to automate processes, analyze data, and take your projects to the next technological level.",
        "cta": "Let's talk about your project"
      },
       "contactPage": {
        "title": "Get in Touch",
        "intro": "I'm always open to connecting. Whether you have a question, an opportunity for collaboration, or just want to say hello, feel free to reach out through these channels or download my CV.",
        "github": "GitHub",
        "linkedin": "LinkedIn",
        "emailAddress": "pa.garciaperezvela@ugto.mx",
        "emailAction": "Copy Email",
        "emailCopied": "Copied!",
        "downloadCV": "Download CV",
        "cvDownloaded": "CV Downloaded!"
      },
      "projectsPage": {
        "title": "My Projects",
        "fitodex_title": "Fitodex",
        "fitodex_desc": "A web platform for plant identification and consultation, where I developed the complete backend with Node.js and Express, and participated in the frontend layout.",
        "lsm_title": "Real-Time Mexican Sign Language (LSM) Translator",
        "lsm_desc": "An application that uses the camera to capture Mexican Sign Language (LSM) signs and translates them into text in real-time using an AI model.",
        "nba_title": "NBA Role Classifier",
        "nba_desc": "A Machine Learning-based system that analyzes NBA player statistics to classify them into modern roles and generate personalized training plans.",
        "art_title": "Art Classifier with MLP",
        "art_desc": "A Multilayer Perceptron (MLP) trained to classify works of art into different styles (e.g., Impressionism, Cubism) from an image.", 
        "viewOnGithub": "View on GitHub",
        "viewWebsite": "View Website" 
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