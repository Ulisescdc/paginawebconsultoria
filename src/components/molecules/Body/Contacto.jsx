import './Contacto.css';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

const Contacto = () => {
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("https://formsubmit.co/ajax/ventas@energyconsultingservices.com.mx", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nombre: form.nombre.value,
        email: form.email.value,
        mensaje: form.mensaje.value
      })
    })
      .then(response => {
        if (response.ok) {
          setMensajeEnviado(true);
          form.reset();
          setTimeout(() => setMensajeEnviado(false), 4000);
        } else {
          alert("Hubo un problema al enviar el mensaje.");
        }
      })
      .catch(() => alert("No se pudo enviar el mensaje."));

  };

  return (
    <section id="contacto" className="contacto-container">
      <h2 className="titulo-contacto">Contáctanos</h2>
      <div className="contacto-contenido">
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

        <div className="info-contacto">
          <p>También puedes escribirnos por WhatsApp:</p>
          <a
            href="https://wa.me/528116577869?text=Buen%20día%2C%20%BFpodr%C3%ADa%20darme%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20consultor%C3%ADa%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-boton"
          >
            <FaWhatsapp size={20} /> Escríbenos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
