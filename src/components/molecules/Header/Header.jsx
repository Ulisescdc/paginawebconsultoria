import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <span className="linea1">ENERGY CONSULTING</span>
        <span className="linea2">AND SERVICES</span>
      </div>

      <div className={`nav-toggle ${menuAbierto ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="barra"></span>
        <span className="barra"></span>
        <span className="barra"></span>
      </div>

      <nav className={`nav ${menuAbierto ? 'activo' : ''}`}>
        <a href="#inicio" onClick={cerrarMenu}>Inicio</a>
        <a href="#acerca" onClick={cerrarMenu}>Acerca de</a>
        <a href="#trayectoria" onClick={cerrarMenu}>Trayectoria</a>
        <div className="dropdown">
          <span className="dropbtn">Servicios</span>
          <div className="dropdown-content">
            <a href="#servicios-termicos" onClick={cerrarMenu}>Servicios Térmicos</a>
            <a href="#servicios-energeticos" onClick={cerrarMenu}>Servicios Energéticos</a>
            <a href="#servicios-especiales" onClick={cerrarMenu}>Servicios Especiales</a>
          </div>
        </div>
        <a href="#contacto" onClick={cerrarMenu}>Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
