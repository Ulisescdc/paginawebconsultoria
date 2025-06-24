import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-stem">ENERGY CONSULTING AND SERVICES</span>
      </div>
      <nav className="nav">
        <a href="#inicio">Inicio</a>
        <a href="#acerca">Acerca de</a>
        <a href="#trayectoria">Trayectoria</a>
        <div className="dropdown">
          <span className="dropbtn">Servicios</span>
          <div className="dropdown-content">
            <a href="#servicios-termicos">Servicios Térmicos</a>
            <a href="#servicios-energeticos">Servicios Energéticos</a>
            <a href="#servicios-especiales">Servicios Especiales</a>
          </div>
        </div>
        
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
