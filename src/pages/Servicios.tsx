// src/pages/Servicios.tsx (NUEVA VERSIÓN)

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
// Importamos los iconos que usaremos de lucide-react
import { Code, BrainCircuit } from 'lucide-react'; 
import './Servicios.css'; // Crearemos este archivo para los estilos

const Servicios = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <h1>{t('servicesPage.title')}</h1>

      <div className="services-grid">
        {/* Tarjeta de Servicio 1: Desarrollo Web */}
        <div className="service-card">
          <Code size={48} className="service-icon" />
          <h2>{t('servicesPage.webDevTitle')}</h2>
          <p>{t('servicesPage.webDevDesc')}</p>
        </div>

        {/* Tarjeta de Servicio 2: Soluciones de Software e IA */}
        <div className="service-card">
          <BrainCircuit size={48} className="service-icon" />
          <h2>{t('servicesPage.aiTitle')}</h2>
          <p>{t('servicesPage.aiDesc')}</p>
        </div>
      </div>

      {/* Sección de Llamado a la Acción (Call to Action) */}
      <div className="cta-container">
        <Link to="/contacto" className="cta-button">
          {t('servicesPage.cta')}
        </Link>
      </div>
    </div>
  );
};

export default Servicios;