import React, { useEffect, useState } from 'react';
import type { NasaApod } from '../types';
import { translateText } from '../services/translationService';

interface ImageModalProps {
  image: NasaApod;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  const [translatedTitle, setTranslatedTitle] = useState(image.title);
  const [translatedExplanation, setTranslatedExplanation] = useState(image.explanation);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  useEffect(() => {
    const translateContent = async () => {
      // Evita traducir textos muy cortos o sin contenido
      if (!image.explanation || image.explanation.length < 10) {
        setTranslatedTitle(image.title);
        setTranslatedExplanation(image.explanation);
        return;
      }
      
      setIsTranslating(true);
      try {
        const [title, explanation] = await Promise.all([
          translateText(image.title),
          translateText(image.explanation),
        ]);
        setTranslatedTitle(title);
        setTranslatedExplanation(explanation);
      } catch (error) {
        console.error('La traducción falló, mostrando el texto original.', error);
        setTranslatedTitle(image.title);
        setTranslatedExplanation(image.explanation);
      } finally {
        setIsTranslating(false);
      }
    };

    translateContent();
  }, [image]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 text-white rounded-lg shadow-2xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:w-3/5 flex-shrink-0">
          <img
            src={image.hdurl || image.url}
            alt={translatedTitle}
            className="w-full h-full object-contain bg-black"
          />
        </div>
        <div className="md:w-2/5 p-6 flex flex-col overflow-y-auto">
          <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-blue-300">{translatedTitle}</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors text-3xl"
                aria-label="Cerrar modal"
              >
                &times;
              </button>
          </div>
          <p className="text-sm text-gray-400 mb-4">{image.date}</p>
          
          {isTranslating && <p className="text-sm text-gray-500 italic animate-pulse mb-4">Traduciendo descripción...</p>}

          <p className="text-gray-300 text-base leading-relaxed flex-grow">
            {translatedExplanation}
          </p>
          {image.copyright && (
            <p className="text-xs text-gray-500 mt-4 italic">
              Crédito: {image.copyright}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;