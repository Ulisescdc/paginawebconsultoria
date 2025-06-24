import React, { useState } from 'react';
import './ModalPrivacidad.css';

const ModalPrivacidad = () => {
  const [abierto, setAbierto] = useState(false);

  return (
    <>
      <button className="pie-link" onClick={() => setAbierto(true)}>Política de Privacidad</button>

      {abierto && (
        <div className="modal-overlay" onClick={() => setAbierto(false)}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <h2>Política de Privacidad</h2>
            <div className="modal-scroll">
              <p>
                En ENERGY CONSULTING AND SERVICES, respetamos su privacidad y nos comprometemos a proteger los datos personales que usted nos proporciona.
              </p>
              <p>
                <strong>1. Datos que recopilamos:</strong> Recopilamos su nombre, correo electrónico y mensaje cuando usted nos contacta a través del formulario de contacto o por WhatsApp.
              </p>
              <p>
                <strong>2. Uso de la información:</strong> Utilizamos sus datos únicamente para responder a sus consultas o solicitudes. No vendemos ni compartimos su información con terceros.
              </p>
              <p>
                <strong>3. Protección de datos:</strong> Implementamos medidas de seguridad para proteger su información personal.
              </p>
              <p>
                <strong>4. Derechos del usuario:</strong> Usted tiene derecho a solicitar el acceso, corrección o eliminación de sus datos personales en cualquier momento.
              </p>
              <p>
                <strong>5. Contacto:</strong> Si tiene dudas sobre nuestra política, puede escribirnos a contacto@stem.mx
              </p>
              <p>
                Esta política puede ser modificada sin previo aviso. Última actualización: mayo 2025.
              </p>
            </div>
            <button className="modal-cerrar" onClick={() => setAbierto(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalPrivacidad;
