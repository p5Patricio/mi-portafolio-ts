import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Definimos la forma de los datos que nuestro contexto compartirá
interface ThemeContextType {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

// Creamos el contexto con un valor inicial por defecto
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
});

// Creamos el componente "Proveedor" que envolverá nuestra app
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // Efecto que cambia la clase en el <body> de la página
  useEffect(() => {
    document.body.className = ''; // Limpiamos clases anteriores
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};