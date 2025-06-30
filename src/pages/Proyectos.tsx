// src/pages/Proyectos.tsx

import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { useTranslation } from 'react-i18next';
import './Proyectos.css';

const Proyectos = () => {
  const { t } = useTranslation();

  // CAMBIO: La estructura ahora incluye 'link' y 'linkType'
  const projectsData = [
    {
      titleKey: 'projectsPage.fitodex_title',
      descriptionKey: 'projectsPage.fitodex_desc',
      images: ['/images/fitodex-1.png', '/images/fitodex-2.png'],
      link: 'https://frontend-fitodex.fly.dev',
      linkType: 'website' // <--- Tipo de link para Fitodex
    },
    {
      titleKey: 'projectsPage.lsm_title',
      descriptionKey: 'projectsPage.lsm_desc',
      images: ['/images/lsm-1.jpg', '/images/lsm-2.png'],
      link: 'https://github.com/p5Patricio/Interprete-LSM',
      linkType: 'github' // <--- Tipo de link para los demás
    },
    {
      titleKey: 'projectsPage.nba_title',
      descriptionKey: 'projectsPage.nba_desc',
      images: ['/images/nba-1.png', '/images/nba-2.png'],
      link: 'https://github.com/p5Patricio/Clasificador_Entrenador-NBA',
      linkType: 'github'
    },
    {
      titleKey: 'projectsPage.art_title',
      descriptionKey: 'projectsPage.art_desc',
      images: ['/images/art-1.png', '/images/art-2.png'],
      link: 'https://github.com/p5Patricio/Art_Classifier',
      linkType: 'github'
    }
  ];

  return (
    <div className="page-container">
      <h1>{t('projectsPage.title')}</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          // El componente ProjectCard ahora recibe la nueva estructura
          <ProjectCard
            key={index}
            project={{
              title: t(project.titleKey),
              description: t(project.descriptionKey),
              images: project.images,
              link: project.link,
              linkType: project.linkType as 'github' | 'website' // Aseguramos el tipo
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Proyectos;