
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black bg-opacity-30 py-4 text-center text-gray-400 text-sm mt-8 border-t border-blue-500/20">
      <p>
        Desarrollado con la{' '}
        <a
          href="https://images.nasa.gov/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          API de la Biblioteca de Imágenes y Videos de la NASA
        </a>
      </p>
      <p>&copy; {new Date().getFullYear()} Galería Cósmica. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;