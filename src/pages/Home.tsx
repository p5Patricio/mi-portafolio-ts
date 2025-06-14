import React from 'react';
import { useTranslation } from 'react-i18next'; // Importamos el hook

const Home = () => {
  const { t } = useTranslation(); // Inicializamos el hook

  return (
    <div>
      {/* Usamos la función t() con la clave de la traducción */}
      <h1>{t('welcomeTitle')}</h1>
      <p>{t('welcomeSubtitle')}</p>
    </div>
  );
};

export default Home;