import React from 'react';
import './Inicio.css';
import logo from '../assets/stem.png';
import imagenFondo from '../assets/Imagen1.jpg';

const Inicio = () => {
  return (
    <section
      className="inicio-container"
      style={{ backgroundImage: `url(${imagenFondo})` }}
      id="inicio"
    >
      <div className="inicio-wrapper">
        <div className="inicio-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="inicio-texto">
          <p>
            En ECS creemos en la planeación, gestión y mantenimiento de todos
            los activos energéticos de las empresas, lo cual permite a las
            organizaciones mantener su confiabilidad y crear el mayor valor de
            cada proceso.
          </p>
        </div>
      </div>
      <div className="inicio-subtitulo">
        <h2>SERVICIOS DE CONSULTORÍA TÉRMICA Y ENERGÉTICA</h2>
      </div>
    </section>
  );
};

export default Inicio;
