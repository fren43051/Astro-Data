
import React from 'react';

const CometAtlasInfo: React.FC = () => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-700/50 text-gray-300 animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500 mb-4">
        Cometa C/2023 A3 (Tsuchinshan–ATLAS)
      </h2>
      <p className="text-lg mb-6 text-gray-400">
        ¡Prepárate para un posible espectáculo celestial en el otoño de 2024!
      </p>

      <div className="space-y-6 text-base leading-relaxed">
        <div>
          <h3 className="text-xl font-semibold text-blue-300 mb-2">¿Qué es?</h3>
          <p>
            El cometa C/2023 A3 (Tsuchinshan–ATLAS) es un cometa de período largo descubierto a principios de 2023. Ha generado una gran expectación en la comunidad astronómica por su potencial para volverse excepcionalmente brillante, posiblemente incluso visible a simple vista durante un tiempo.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-300 mb-2">Cuándo Verlo</h3>
          <p>
            El cometa hará su máximo acercamiento al Sol (perihelio) a finales de septiembre de 2024, seguido de su máximo acercamiento a la Tierra a mediados de octubre de 2024.
          </p>
          <ul className="list-disc list-inside mt-3 pl-4 space-y-2">
            <li><strong>Finales de septiembre de 2024:</strong> Podría hacerse visible en el cielo matutino justo antes del amanecer.</li>
            <li><strong>Mediados de octubre de 2024:</strong> Este es el mejor momento para observarlo. Se espera que el cometa esté en su punto más brillante, apareciendo en el cielo vespertino poco después del atardecer.</li>
            <li><strong>Noviembre de 2024:</strong> Aunque ya habrá pasado su máximo brillo, aún podría ser visible con binoculares o un telescopio pequeño mientras se aleja del Sol y la Tierra.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-300 mb-2">Cómo Buscarlo</h3>
          <p>
            Busca un lugar con cielos oscuros, lejos de las luces de la ciudad. Mira hacia el horizonte oeste después del atardecer durante octubre. Aunque las predicciones son optimistas, los cometas son notoriamente impredecibles. Su brillo real podría variar, ¡pero sin duda es un evento que vale la pena esperar!
          </p>
        </div>
      </div>
       <p className="text-sm text-gray-500 mt-8 italic">
          Nota: La información presentada aquí se basa en las predicciones orbitales actuales. Para obtener la información de visualización más actualizada, consulta sitios web de astronomía cuando se acerque la fecha.
       </p>
    </div>
  );
};

export default CometAtlasInfo;