import logo from './logo.svg';
import './App.css';

import BasicLayout from './components/templates/BasicLayout/BasicLayout';
import Inicio from './components/molecules/Body/Inicio'; 
import Acerca from './components/molecules/Body/Acerca';
import Trayectoria from './components/molecules/Body/Trayectoria';

import Contacto from './components/molecules/Body/Contacto';
import PieDePagina from './components/molecules/Body/PieDePagina';
import Servicios from './components/molecules/Body/Servicios';

function App() {
  return (
    <div className="App">
      <BasicLayout logoUrl={logo} />
      <Inicio />
      <Acerca />
      <Trayectoria />
      <Servicios />
      
      <Contacto />
      <PieDePagina />
    </div>
  );
}

export default App;
