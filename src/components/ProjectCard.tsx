// src/components/ProjectCard.tsx

import React, { useState } from 'react';
// CAMBIO 1: Importamos el nuevo icono y el hook de traducción
import { Github, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './ProjectCard.css';

// CAMBIO 2: Actualizamos la interfaz para que sea más flexible
interface Project {
  title: string;
  images: string[];
  description: string;
  link: string;
  linkType: 'github' | 'website'; // Aceptamos dos tipos de link
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // CAMBIO 3: Obtenemos la función de traducción
  const { t } = useTranslation();

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="project-card">
      <div className="project-carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {project.images.map((image, index) => (
            <img key={index} src={image} alt={`${project.title} - Imagen ${index + 1}`} />
          ))}
        </div>
        <button onClick={prevImage} className="carousel-btn prev"><ChevronLeft size={24} /></button>
        <button onClick={nextImage} className="carousel-btn next"><ChevronRight size={24} /></button>
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {/* CAMBIO 4: El link ahora es dinámico */}
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-link">
          {project.linkType === 'website' ? (
            // Si es un sitio web, muestra el icono de link externo
            <ExternalLink size={20} />
          ) : (
            // Si no, muestra el icono de GitHub
            <Github size={20} />
          )}
          
          {/* El texto también cambia según el tipo de link, usando las claves de i18n */}
          {project.linkType === 'website' 
            ? t('projectsPage.viewWebsite') 
            : t('projectsPage.viewOnGithub')}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;