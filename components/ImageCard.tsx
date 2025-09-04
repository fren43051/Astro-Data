
import React from 'react';
import type { NasaApod } from '../types';

interface ImageCardProps {
  image: NasaApod;
  onSelect: (image: NasaApod) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onSelect }) => {
  return (
    <div
      className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out bg-black"
      onClick={() => onSelect(image)}
    >
      <img
        src={image.url}
        alt={image.title}
        className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-60"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
      <div className="absolute bottom-0 left-0 p-4 w-full">
        <h3 className="text-white font-bold text-lg truncate group-hover:whitespace-normal group-hover:text-blue-300 transition-colors duration-200">
          {image.title}
        </h3>
        <p className="text-gray-300 text-sm mt-1">{image.date}</p>
      </div>
    </div>
  );
};

export default ImageCard;
