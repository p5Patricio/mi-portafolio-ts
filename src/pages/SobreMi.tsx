// src/pages/SobreMi.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import './SobreMi.css';
import { Gamepad2, Dumbbell, MapPin, Building, Trophy, Music, Clapperboard } from 'lucide-react';

const SobreMi = () => {
  const { t } = useTranslation();

  return (
    <div className="sobremi-container">
      {/* Mensaje de presentación (Biografía) */}
      <div 
        className="sobremi-bio" 
        dangerouslySetInnerHTML={{ 
          __html: `<p>${t('sobreMiPage.bio_p1')}</p><p>${t('sobreMiPage.bio_p2')}</p>` 
        }} 
      />
      
      {/* Sección de Intereses */}
      <div className="intereses-section">
        <h3>{t('sobreMiPage.interests_title')}</h3>
        <div className="intereses-grid">
          <div className="interes-pill"><Gamepad2 /><span>{t('sobreMi-Page.interest_games')}</span></div>
          <div className="interes-pill"><Building /><span>{t('sobreMiPage.interest_mazda')}</span></div>
          <div className="interes-pill"><Trophy /><span>{t('sobreMiPage.interest_basketball')}</span></div>
          <div className="interes-pill"><Dumbbell /><span>{t('sobreMiPage.interest_gym')}</span></div>
          <div className="interes-pill"><MapPin /><span>{t('sobreMiPage.interest_location')}</span></div>
          <div className="interes-pill"><Music /><span>{t('sobreMiPage.interest_kpop')}</span></div>
          <div className="interes-pill"><Clapperboard /><span>{t('sobreMiPage.interest_anime')}</span></div>
        </div>
      </div>

      {/* Sección de Citas */}
      <div className="quotes-section">

        {/* ✨ NUEVO: Contenedor para la fila de dos citas ✨ */}
        <div className="quotes-row">
          {/* Cita 1 */}
          <div className="quote-block">
            <img src={`${process.env.PUBLIC_URL}/images/garou.png`} alt="Garou" className="quote-image" />
            <blockquote className="sobremi-quote">
              "{t('sobreMiPage.quote1_text')}"
              <footer>{t('sobreMiPage.quote1_author')}</footer>
            </blockquote>
          </div>
          {/* Cita 3 (la de NewJeans, ahora va sola debajo) */}
          <div className="quote-block">
            <img src={`${process.env.PUBLIC_URL}/images/newjeans.png`} alt="NewJeans" className="quote-image" />
            <blockquote className="sobremi-quote">
              "{t('sobreMiPage.quote3_text')}"
              <footer>{t('sobreMiPage.quote3_author')}</footer>
            </blockquote>
          </div>

          <div className="quote-block">
            <img src={`${process.env.PUBLIC_URL}/images/isagi.png`} alt="Isagi" className="quote-image" />
            <blockquote className="sobremi-quote">
              "{t('sobreMiPage.quote4_text')}"
              <footer>{t('sobreMiPage.quote4_author')}</footer>
            </blockquote>
          </div>
        </div>        
      </div>
    </div>
  );
};

export default SobreMi;