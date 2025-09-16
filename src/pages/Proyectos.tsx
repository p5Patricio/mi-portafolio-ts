// src/pages/Proyectos.tsx

import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { useTranslation } from 'react-i18next';
import './Proyectos.css';

const Proyectos = () => {
  const { t } = useTranslation();

  const projectsData = [
    {
      titleKey: 'projectsPage.fitodex_title',
      descriptionKey: 'projectsPage.fitodex_desc',
      // ✨ CAMBIO AQUÍ ✨
      images: [
        `${process.env.PUBLIC_URL}/images/fitodex-1.png`, 
        `${process.env.PUBLIC_URL}/images/fitodex-2.png`
      ],
      link: 'https://frontend-fitodex.fly.dev',
      linkType: 'website'
    },
    {
      titleKey: 'projectsPage.lsm_title',
      descriptionKey: 'projectsPage.lsm_desc',
      // ✨ CAMBIO AQUÍ ✨
      images: [
        `${process.env.PUBLIC_URL}/images/lsm-1.jpg`, 
        `${process.env.PUBLIC_URL}/images/lsm-2.png`
      ],
      link: 'https://github.com/p5Patricio/Interprete-LSM',
      linkType: 'github'
    },
    {
      titleKey: 'projectsPage.nba_title',
      descriptionKey: 'projectsPage.nba_desc',
      // ✨ CAMBIO AQUÍ ✨
      images: [
        `${process.env.PUBLIC_URL}/images/nba-1.png`, 
        `${process.env.PUBLIC_URL}/images/nba-2.png`
      ],
      link: 'https://github.com/p5Patricio/Clasificador_Entrenador-NBA',
      linkType: 'github'
    },
    {
      titleKey: 'projectsPage.art_title',
      descriptionKey: 'projectsPage.art_desc',
      // ✨ CAMBIO AQUÍ ✨
      images: [
        `${process.env.PUBLIC_URL}/images/art-1.png`, 
        `${process.env.PUBLIC_URL}/images/art-2.png`
      ],
      link: 'https://github.com/p5Patricio/Art_Classifier',
      linkType: 'github'
    }
  ];

  return (
    <div className="page-container">
      <h1>{t('projectsPage.title')}</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            project={{
              title: t(project.titleKey),
              description: t(project.descriptionKey),
              images: project.images,
              link: project.link,
              linkType: project.linkType as 'github' | 'website'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Proyectos;