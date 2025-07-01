import React from 'react';
import './Trayectoria.css';
import fotoConsultor from '../assets/consultor.jpg';

const Trayectoria = () => {
  return (
    <section id="trayectoria" className="trayectoria-section">
      <div className="consultor-card">
        <img src={fotoConsultor} alt="M.C. Edgar Ulises Rivera Flores" className="consultor-foto" />
        <div className="consultor-texto">
          <h2>M.C. Edgar Ulises Rivera Flores</h2>
          <p>
            El ingeniero Edgar Ulises Rivera Flores con una maestría en ciencias de la ingeniería con orientación en energías térmica y renovable por la Facultad de Ingeniería Mecánica y Eléctrica de la Universidad Autónoma de Nuevo León tiene experiencia en proyectos de ingeniería como en el diseño de sistemas mecánicos, térmicos y de tuberías, actualmente se especializa en la evaluación de sistemas energéticos y de combustión, consultorías térmicas, mantenimiento y comisionamiento de hornos y sistemas de Combustion, en el ámbito académico, tiene más de 10 años de experiencia impartiendo capacitación técnica en las áreas de automatización, tecnologías de calentamiento y sistemas energéticos.
          </p>
        </div>
      </div>

      <div className="portafolio-block">
        <h3>Portafolio Profesional</h3>
        <ul className="portafolio-lista">
          <li>Diseño de sistemas térmicos para la industria manufacturera</li>
          <li>Consultoría energética en plantas de combustión</li>
          <li>Capacitación técnica especializada en sistemas de calentamiento</li>
          <li>Evaluaciones energéticas en proyectos de descarbonización</li>
          <li>Instalación y comisionamiento de tres cámaras de combustión para proceso de secado de harina de maíz</li>
          <li>Instalación y comisionamiento de horno para proceso de forjado</li>
          <li>Análisis energético de hornos de calcinación de material cerámico en UK</li>
          <li>Análisis energético de proceso y hornos de recalentamiento de planchones para laminación en caliente</li>
          <li>Análisis energético de planta de reducción directa y sus equipos auxiliares</li>
          <li>Evaluación de la combustión y análisis de emisiones de mezclas de combustibles en un motor de alta potencia</li>
          <li>Análisis de falla mediante simulación de elemento finito en un acoplamiento mecánico</li>
          <li>Diseño y manufactura de sistema de amortiguamiento de vagón de 30 Ton. (2016)</li>
          <li>Trabajos de mantenimiento en el periodo de recarga de la Central Nucleoeléctrica Laguna Verde (CFE), agosto 2012</li>
        </ul>
      </div>
    </section>
  );
};

export default Trayectoria;
