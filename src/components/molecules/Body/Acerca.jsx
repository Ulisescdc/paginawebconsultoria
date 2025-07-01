import React from 'react';
import './Acerca.css';
import bgImage from './Imagen2.jpg';

const Acerca = () => {
  return (
    <section
      id="acerca"
      className="nosotros-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay">
        <div className="top-section">
          <div className="card">
            <h3>Misión</h3>
            <p>
              Proporcionar soluciones energéticas innovadoras y sostenibles que
              optimicen el rendimiento de los procesos térmicos e industriales,
              comprometidos con la seguridad, la eficiencia y el desarrollo
              responsable.
            </p>
          </div>

          <div className="card">
            <h3>Visión</h3>
            <p>
              Ser reconocidos como la consultoría líder en servicios energéticos
              y térmicos, impulsando la transformación energética en América
              Latina mediante tecnología, conocimiento y compromiso.
            </p>
          </div>

          <div className="card">
            <h3>Valores</h3>
            <p>
              Excelencia técnica, ética profesional, compromiso ambiental,
              innovación constante y orientación al cliente son los pilares que
              rigen cada uno de nuestros servicios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acerca;
