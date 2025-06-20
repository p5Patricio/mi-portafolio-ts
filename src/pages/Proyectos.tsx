// src/pages/Proyectos.tsx

import React from 'react';
import ProjectCard from '../components/ProjectCard'; // Importamos el componente
import './Proyectos.css'; // Importamos los estilos de la página

// --- AQUÍ DEFINIMOS LOS DATOS DE TUS PROYECTOS ---
// ⚠️ Reemplaza los placeholders de descripción e imágenes con los tuyos
const projectsData = [
  {
    title: 'Fitodex',
    images: ['/images/fitodex-1.png', '/images/fitodex-2.png'], // Coloca tus imágenes en la carpeta /public/images/
    description: 'Plataforma web para la identificación y consulta de plantas, donde desarrollé el backend completo con Node.js y Express, y participé en la maquetación del frontend.',
    githubLink: 'https://github.com/tu-usuario/fitodex'
  },
  {
    title: 'Traductor en Tiempo Real de LSM',
    images: ['/images/lsm-1.png', '/images/lsm-2.png'],
    description: 'Aplicación que utiliza la cámara para capturar señas de la Lengua de Señas Mexicana (LSM) y las traduce a texto en tiempo real mediante un modelo de IA.',
    githubLink: 'https://github.com/tu-usuario/traductor-lsm'
  },
  {
    title: 'Clasificador de Roles en la NBA',
    images: ['/images/nba-1.png', '/images/nba-2.png'],
    description: 'Sistema basado en Machine Learning que analiza estadísticas de jugadores de la NBA para clasificarlos en roles modernos y generar planes de entrenamiento personalizados.',
    githubLink: 'https://github.com/tu-usuario/nba-classifier'
  },
  {
    title: 'Clasificador de Arte con MLP',
    images: ['/images/art-1.png', '/images/art-2.png'],
    description: 'Un Perceptrón Multicapa (MLP) entrenado para clasificar obras de arte en diferentes estilos (ej. Impresionismo, Cubismo) a partir de una imagen.',
    githubLink: 'https://github.com/tu-usuario/art-mlp'
  }
];

const Proyectos = () => {
  return (
    <div className="page-container">
      <h1>Mis Proyectos</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Proyectos;