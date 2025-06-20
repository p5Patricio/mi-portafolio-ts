// src/components/icons/TechIcon.tsx

import React from 'react';

// Este componente recibirá el "path" del SVG como una prop
interface TechIconProps {
  svgPath: string;
  className?: string;
}

const TechIcon = ({ svgPath, className }: TechIconProps) => (
  <svg 
    className={className}
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor" // El color será heredado del CSS
  >
    <path d={svgPath} />
  </svg>
);

export default TechIcon;