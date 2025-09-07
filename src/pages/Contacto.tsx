// src/pages/Contacto.tsx (NUEVA VERSIÓN)

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// Importamos los iconos que usaremos
import { Github, Linkedin, Download, Copy, Check } from 'lucide-react';
import './Contacto.css'; // Crearemos este archivo para los estilos

const Contacto = () => {
  const { t } = useTranslation();
  const [isCopied, setIsCopied] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleCopyEmail = () => {
    // Usamos la API del Navegador para copiar el texto
    navigator.clipboard.writeText(t('contactPage.emailAddress'));
    
    // Activamos el estado "copiado"
    setIsCopied(true);

    // Después de 2 segundos, volvemos al estado original
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleDownloadClick = () => {
    setIsDownloaded(true);
    setTimeout(() => {
      setIsDownloaded(false);
    }, 2500); // El mensaje dura 2.5 segundos
  };

  return (
    <div className="page-container">
      <div className="page-container contact-page">
        <h1 className='titulo'>{t('contactPage.title')}</h1>
        <p className="contact-intro">{t('contactPage.intro')}</p>

        <div className="contact-grid">
          {/* Tarjeta de Contacto 1: GitHub */}
          <a href="https://github.com/p5Patricio" target="_blank" rel="noopener noreferrer" className="contact-card">
            <Github size={40} />
            <span>{t('contactPage.github')}</span>
          </a>

          {/* Tarjeta de Contacto 2: LinkedIn */}
          <a href="https://www.linkedin.com/in/patriciogarc%C3%ADapv/" target="_blank" rel="noopener noreferrer" className="contact-card">
            <Linkedin size={40} />
            <span>{t('contactPage.linkedin')}</span>
          </a>

          {/* Tarjeta de Contacto 3: Correo */}
          <button 
            onClick={handleCopyEmail} 
            className={`contact-card ${isCopied ? 'copied' : ''}`}
          >
            {isCopied ? <Check size={40} /> : <Copy size={40} />}
            <span>{t('contactPage.emailAddress')}</span>
            <p className="copy-feedback">{isCopied ? t('contactPage.emailCopied') : t('contactPage.emailAction')}</p>
          </button>
          <a 
            href="/CV_Patricio_Garcia.pdf" 
            download 
            className={`contact-card ${isDownloaded ? 'copied' : ''}`} // Añadimos clase condicional
            onClick={handleDownloadClick} // 3. Añadimos el manejador de clic
          >
            <Download size={40} />
            {/* 4. El texto ahora es condicional */}
            <span>{isDownloaded ? t('contactPage.cvDownloaded') : t('contactPage.downloadCV')}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacto;