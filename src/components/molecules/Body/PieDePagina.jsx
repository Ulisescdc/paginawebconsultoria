import React from 'react';
import './PieDePagina.css';
import logo from '../assets/stem.png'; 
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import ModalPrivacidad from '../ModalPrivacidad/ModalPrivacidad';

const PieDePagina = () => {
  return (
    <footer className="pie-container">
      <div className="pie-logo">
        <img src={logo} alt="Logo Energy Consulting and Services" />
      </div>

      <div className="pie-info">
        <p className="pie-text">© 2025 ENERGY CONSULTING AND SERVICES. Todos los derechos reservados.</p>
        <ModalPrivacidad />
      </div>

      <div className="pie-social">
        <a href="https://www.facebook.com/profile.php?id=61555061220342&locale=es_LA" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.linkedin.com/in/ulises-rivera-f/" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
};

export default PieDePagina;
