
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black bg-opacity-50 backdrop-blur-md shadow-lg shadow-blue-500/10 py-6 text-center border-b border-blue-500/20">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
          Galería Cósmica de la NASA
        </h1>
        <p className="text-gray-300 mt-2 text-sm md:text-base">
          Un Viaje a Través de las Estrellas, Una Imagen a la Vez
        </p>
      </div>
    </header>
  );
};

export default Header;