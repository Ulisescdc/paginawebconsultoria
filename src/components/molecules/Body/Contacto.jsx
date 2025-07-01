import './Contacto.css';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

const Contacto = () => {
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensajeEnviado(true);
    setTimeout(() => setMensajeEnviado(false), 4000);
    e.target.reset(); // Limpia el formulario
  };

  return (
    <section id="contacto" className="contacto-container">
      <h2 className="titulo-contacto">Contáctanos</h2>
      <div className="contacto-contenido">
        {/* Formulario */}
        <form className="formulario-contacto" onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Tu nombre completo"
            required
          />

          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="correo@ejemplo.com"
            required
          />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            placeholder="Escribe tu mensaje aquí..."
            required
          ></textarea>

          <button type="submit">Enviar</button>

          {mensajeEnviado && (
            <p className="mensaje-confirmacion">¡Mensaje enviado con éxito!</p>
          )}
        </form>

        {/* Información y WhatsApp */}
        <div className="info-contacto">
          <p>También puedes escribirnos por WhatsApp:</p>
          <a
            href="https://wa.me/5211234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-boton"
          >
            <FaWhatsapp size={20} /> Escríbenos
          </a>

          <div className="datos-contacto">
            <p><strong>Correo:</strong> contacto@stem.mx</p>
            <p><strong>Teléfono:</strong> +52 123 456 7890</p>
            <p><strong>Dirección:</strong> Ciudad de México, México</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
