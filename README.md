# 🌌 Galería Cósmica de la NASA

**Un Viaje a Través de las Estrellas, Una Imagen a la Vez**

Una aplicación web interactiva que te permite explorar el cosmos a través de las impresionantes imágenes de la NASA. Descubre galaxias, nebulosas, cometas, asteroides y otros objetos celestiales con traducciones automáticas al español y información detallada sobre fenómenos astronómicos.

## ✨ Características Principales

- 🚀 **Galería de Imágenes NASA**: Explora miles de imágenes del espacio utilizando la API oficial de NASA Images
- 🌍 **Traducción Automática**: Contenido traducido automáticamente al español usando Google Gemini AI
- 📂 **Navegación por Categorías**: Organizado en secciones como Galaxias, Nebulosas, Cometas, Sistema Solar y más
- 🪐 **Información Especializada**: Sección dedicada al Cometa C/2023 A3 (Tsuchinshan–ATLAS) 
- 📱 **Diseño Responsivo**: Interfaz adaptada para dispositivos móviles, tablets y escritorio
- 🌙 **Tema Espacial**: Diseño moderno con estética cósmica y animaciones suaves
- 🖼️ **Vista Modal**: Visualización en alta resolución con descripciones detalladas

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19 con TypeScript
- **Construcción**: Vite
- **Estilos**: Tailwind CSS
- **API**: NASA Images API
- **IA**: Google Gemini para traducciones
- **Tipografías**: Orbitron y Roboto desde Google Fonts

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- Una clave API de Google Gemini (para las traducciones)

### Instalación

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/fren43051/Astro-Data.git
   cd Astro-Data
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Configura la clave API**:
   - Crea un archivo `.env.local` en la raíz del proyecto
   - Añade tu clave API de Google Gemini:
     ```
     GEMINI_API_KEY=tu_clave_api_aqui
     ```

4. **Ejecuta la aplicación**:
   ```bash
   npm run dev
   ```

5. **¡Explora el cosmos!** Abre tu navegador en `http://localhost:5173`

### Comandos Disponibles

```bash
npm run dev      # Ejecuta el servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm run preview  # Vista previa de la construcción
```

## 🌟 Cómo Usar la Aplicación

1. **Explorar Categorías**: Usa la barra lateral para navegar entre diferentes tipos de objetos celestiales
2. **Ver Imágenes**: Haz clic en cualquier imagen para verla en alta resolución
3. **Leer Descripciones**: Todas las descripciones se traducen automáticamente al español
4. **Información Especial**: Visita la sección "Cometa ATLAS" para datos sobre este fascinante objeto celeste

## 📡 Fuente de Datos

Esta aplicación utiliza la [NASA Images API](https://images.nasa.gov/docs/) para obtener:
- Imágenes de alta calidad del espacio
- Metadatos detallados de cada imagen
- Información actualizada sobre misiones espaciales

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes, por favor abre un issue primero para discutir qué te gustaría cambiar.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.

---

<div align="center">

**Desarrollado con ❤️ para los amantes del espacio**

🌌 *"El cosmos está dentro de nosotros. Estamos hechos de material estelar."* - Carl Sagan

</div>
