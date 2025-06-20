// src/components/ProjectCard.tsx (VERSIÓN CON LUCIDE-REACT)

import React, { useState } from 'react';
// CAMBIO: Importamos los iconos desde 'lucide-react'
import { Github, ChevronLeft, ChevronRight } from 'lucide-react';
import './ProjectCard.css';

interface Project {
  title: string;
  images: string[];
  description: string;
  githubLink: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        {/* CAMBIO: Usamos los nuevos componentes. Les damos tamaño directamente con props. */}
        <button onClick={prevImage} className="carousel-btn prev"><ChevronLeft size={24} /></button>
        <button onClick={nextImage} className="carousel-btn next"><ChevronRight size={24} /></button>
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
          {/* CAMBIO: Usamos el nuevo componente de icono */}
          <Github size={20} />
          Ver en GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;