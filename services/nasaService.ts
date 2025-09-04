
import type { NasaApod } from '../types';
import { NASA_IMAGES_API_URL } from '../constants';

// Helper to safely access nested properties
const get = (obj: any, path: string, defaultValue: any = undefined) => {
  const pathArray = Array.isArray(path) ? path : path.split('.');
  return pathArray.reduce((acc, key) => acc && acc[key], obj) || defaultValue;
};

export const fetchNasaImages = async (query: string, count: number = 40): Promise<NasaApod[]> => {
  const url = `${NASA_IMAGES_API_URL}?q=${encodeURIComponent(
    query
  )}&media_type=image`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(get(errorData, 'reason', `Error de la API: ${response.statusText}`));
    }

    const data = await response.json();
    const items = get(data, 'collection.items', []);
    
    const mappedImages: NasaApod[] = items
      .map((item: any): NasaApod | null => {
        const data = get(item, 'data.0');
        const previewLink = get(item, 'links.0.href');
        const nasaId = get(data, 'nasa_id');

        if (!data || !previewLink || !nasaId) return null;

        return {
          title: get(data, 'title', 'Sin título'),
          url: previewLink,
          hdurl: `https://images-assets.nasa.gov/image/${nasaId}/${nasaId}~orig.jpg`,
          explanation: get(data, 'description', 'No hay descripción disponible.'),
          date: new Date(get(data, 'date_created', new Date())).toISOString().split('T')[0],
          copyright: get(data, 'secondary_creator', 'NASA'),
          media_type: 'image',
          service_version: 'v1-images',
        };
      })
      .filter((image: NasaApod | null): image is NasaApod => image !== null);

    // Return a slice of the results to simulate count
    return mappedImages.slice(0, count);
  } catch (error) {
    console.error("Fallo al obtener las imágenes de la NASA:", error);
    if (error instanceof Error) {
      throw new Error(`No se pudieron obtener los datos de la API de la NASA. ${error.message}`);
    }
    throw new Error('Ocurrió un error de red desconocido.');
  }
};