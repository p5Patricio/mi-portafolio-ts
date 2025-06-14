import React, { useState, useEffect, useRef, useCallback } from 'react';
import './PageBorder.css';

const PageBorder = () => {
  // Tus parámetros de diseño no cambian
  const margin = 20;
  const startY = 120;
  const startXOffset = 65;
  const midY = 120;
  const midXOffset = 85;
  const endY = 25;
  const endXOffset = 190;

  const leftPathRef = useRef<SVGPathElement>(null);
  const rightPathRef = useRef<SVGPathElement>(null);
  
  // Usaremos un array para acumular clases de animación
  const [animationClasses, setAnimationClasses] = useState<string[]>([]);

  const setupLines = useCallback(() => {
    if (leftPathRef.current && rightPathRef.current) {
      const length = leftPathRef.current.getTotalLength();
      leftPathRef.current.style.setProperty('--path-length', `${length}px`);
      rightPathRef.current.style.setProperty('--path-length', `${length}px`);
    }
  }, []);

  useEffect(() => {
    setupLines();
    window.addEventListener('resize', setupLines);
    return () => {
      window.removeEventListener('resize', setupLines);
    };
  }, [setupLines]);

  // --- NUEVO TIMELINE DE ANIMACIÓN ---
  useEffect(() => {
    // FASE 1: Inicia la animación de DIBUJADO después de 1.5s
    const drawTimer = setTimeout(() => {
      setAnimationClasses(['animate-draw']);
    }, 1500);

    // FASE 2: Inicia la animación de MOVIMIENTO después de 4s (1.5s de espera + 2.5s de dibujado)
    const moveTimer = setTimeout(() => {
      setAnimationClasses(prevClasses => [...prevClasses, 'animate-pulse']);
    }, 4000);

    return () => {
      clearTimeout(drawTimer);
      clearTimeout(moveTimer);
    };
  }, []);

  const leftPathData = `M ${window.innerWidth/2 - startXOffset},${startY} L ${window.innerWidth/2 - midXOffset},${midY} L ${window.innerWidth/2 - endXOffset},${endY} L ${margin},${endY}`;
  const rightPathData = `M ${window.innerWidth/2 + startXOffset},${startY} L ${window.innerWidth/2 + midXOffset},${midY} L ${window.innerWidth/2 + endXOffset},${endY} L ${window.innerWidth - margin},${endY}`;

  return (
    <svg className="page-border-svg" width="100vw" height="100vh" >
      {/* Usamos .join(' ') para aplicar todas las clases del array */}
      <path ref={leftPathRef} className={`base-line ${animationClasses.join(' ')}`} d={leftPathData} />
      <path className={`light-pulse ${animationClasses.join(' ')}`} d={leftPathData} />
      
      <path ref={rightPathRef} className={`base-line ${animationClasses.join(' ')}`} d={rightPathData} />
      <path className={`light-pulse ${animationClasses.join(' ')}`} d={rightPathData} />
    </svg>
  );
};

export default PageBorder;