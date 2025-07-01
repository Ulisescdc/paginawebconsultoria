
import React from 'react';
import './Actualidad.css';

const Actualidad = () => {
  return (
    <section id="actualidad" className="actualidad-section">
      <h2 className="actualidad-title">Actualidad</h2>
      <p className="actualidad-subtitle">
        Consulta las últimas publicaciones y novedades del M.C. Edgar Ulises Rivera Flores desde LinkedIn.
      </p>

      <div className="actualidad-widget">
        <iframe
          src="https://widget.tagembed.com/embed/your-widget-id-here"
          style={{ width: '100%', height: '600px', border: 'none', overflow: 'hidden' }}
          title="LinkedIn Feed"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Actualidad;
