// src/pages/Proyectos.tsx

import React from 'react';
import ProjectCard from '../components/ProjectCard'; // Importamos el componente
import { useTranslation } from 'react-i18next'; 
import './Proyectos.css'; // Importamos los estilos de la página

const Proyectos = () => {
  // 2. Llama al hook para obtener la función de traducción 't'
  const { t } = useTranslation();

  // 3. Mueve los datos que no cambian a una estructura base
  //    y usa las claves de traducción para los textos.
  const projectsData = [
    {
      titleKey: 'projectsPage.fitodex_title',
      descriptionKey: 'projectsPage.fitodex_desc',
      images: ['/images/fitodex-1.png', '/images/fitodex-2.png'],
      githubLink: 'https://frontend-fitodex.fly.dev'
    },
    {
      titleKey: 'projectsPage.lsm_title',
      descriptionKey: 'projectsPage.lsm_desc',
      images: ['/images/lsm-1.jpg', '/images/lsm-2.png'],
      githubLink: 'https://github.com/p5Patricio/Interprete-LSM'
    },
    {
      titleKey: 'projectsPage.nba_title',
      descriptionKey: 'projectsPage.nba_desc',
      images: ['/images/nba-1.png', '/images/nba-2.png'],
      githubLink: 'https://github.com/p5Patricio/Clasificador_Entrenador-NBA'
    },
    {
      titleKey: 'projectsPage.art_title',
      descriptionKey: 'projectsPage.art_desc',
      images: ['/images/art-1.png', '/images/art-2.png'],
      githubLink: 'https://github.com/p5Patricio/Art_Classifier'
    }
  ];

  return (
    <div className="page-container">
      {/* 4. Usa 't' para traducir el título de la página */}
      <h1>{t('projectsPage.title')}</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          // 5. Pasa los datos traducidos al componente ProjectCard
          <ProjectCard
            key={index}
            project={{
              title: t(project.titleKey),
              description: t(project.descriptionKey),
              images: project.images,
              githubLink: project.githubLink
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Proyectos;