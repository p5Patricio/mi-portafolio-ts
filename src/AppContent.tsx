// src/AppContent.tsx (VERSIÓN MODIFICADA Y SIMPLE)

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// 2. Importa TODAS tus páginas
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import Servicios from './pages/Servicios';
import SobreMi from './pages/SobreMi';
import Contacto from './pages/Contacto';

function AppContent() {
  return (
    <>
    <Navbar />
    <div className="App fade-in" style={{ paddingTop: '', marginLeft: '60px' }}>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </div>
    </>
  );
}

export default AppContent;