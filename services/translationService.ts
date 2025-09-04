import { GoogleGenAI } from "@google/genai";

const translationCache = new Map<string, string>();

let ai: GoogleGenAI | null = null;
const getAi = () => {
  if (!ai) {
    // FIX: Changed API key retrieval to use process.env.API_KEY per coding guidelines, resolving the compilation error.
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("La variable de entorno API_KEY no está configurada.");
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
}

export const translateText = async (text: string): Promise<string> => {
  if (!text || text.trim().length === 0) return '';
  
  const cacheKey = text.toLowerCase();
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey)!;
  }

  try {
    const ai = getAi();
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Traduce el siguiente texto al español de forma natural y concisa. Mantén el significado original. Si el texto ya parece estar en español, devuélvelo sin cambios. Texto: "${text}"`,
        config: {
            temperature: 0.2,
            thinkingConfig: { thinkingBudget: 0 } // Para respuestas más rápidas
        }
    });

    const translated = response.text.trim();
    translationCache.set(cacheKey, translated);
    return translated;
  } catch (error) {
    console.error('Error al traducir el texto:', error);
    // En caso de error en la traducción, se devuelve el texto original
    return text;
  }
};
