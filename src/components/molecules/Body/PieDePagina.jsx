import React from 'react';
import './PieDePagina.css';
import logo from '../assets/stem.png'; 
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
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
        <a href="#" className="social-icon"><FaFacebookF /></a>
        <a href="#" className="social-icon"><FaTwitter /></a>
        <a href="#" className="social-icon"><FaLinkedinIn /></a>
      </div>
    </footer>
  );
};

export default PieDePagina;
