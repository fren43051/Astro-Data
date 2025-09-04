
import React, { useState, useEffect, useCallback } from 'react';
import { fetchNasaImages } from './services/nasaService';
import type { NasaApod } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageCard from './components/ImageCard';
import Loader from './components/Loader';
import ImageModal from './components/ImageModal';
import ErrorDisplay from './components/ErrorDisplay';
import CategorySidebar from './components/CategorySidebar';
import { CATEGORIES } from './constants';
import CometAtlasInfo from './components/CometAtlasInfo';

const App: React.FC = () => {
  const [images, setImages] = useState<NasaApod[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<NasaApod | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0]);

  const loadImages = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const query = activeCategory === 'Descubrir' ? 'cosmos' : activeCategory;
      const data = await fetchNasaImages(query);
      setImages(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Ocurrió un error desconocido.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [activeCategory]);

  useEffect(() => {
    if (activeCategory !== 'Cometa ATLAS') {
      loadImages();
    }
  }, [loadImages, activeCategory]);

  const handleSelectImage = (image: NasaApod) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };
  
  const handleSelectCategory = (category: string) => {
    setActiveCategory(category);
  };

  const renderContent = () => {
    if (activeCategory === 'Cometa ATLAS') {
      return <CometAtlasInfo />;
    }

    if (isLoading) {
      return <Loader />;
    }

    if (error) {
      return <ErrorDisplay message={error} onRetry={loadImages} />;
    }
    
    if (images.length === 0) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-400">No se encontraron imágenes para esta categoría.</h2>
                <p className="text-gray-500 mt-2">¡Intenta seleccionar otra!</p>
            </div>
        )
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((image) => (
          <ImageCard key={image.url} image={image} onSelect={handleSelectImage} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        <CategorySidebar
          categories={CATEGORIES}
          selectedCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />
        <main className="flex-grow w-full md:w-3/4 lg:w-4/5 xl:w-5/6">
          {renderContent()}
        </main>
      </div>
      <Footer />
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;