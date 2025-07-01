import React, { useState } from 'react';
import './Servicios.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGasPump, faThermometerHalf, faCogs, faMicroscope, faFan, faFlaskVial, faTools,
  faSolarPanel, faChartLine, faRecycle, faChartBar, faLightbulb, faSeedling,
  faProjectDiagram, faFlask, faChalkboardTeacher, faCalculator, faNetworkWired, faBolt
} from '@fortawesome/free-solid-svg-icons';

// Imágenes solo para servicios especiales
import imgSeguridad from '../assets/auditoria de seguridad.jpg';
import imgCombustion from '../assets/curso de combustion.jpg';
import imgEnergetica from '../assets/auditoria energetica.jpg';
import imgGestion from '../assets/consultoria en sistemas de gestion.jpg';

const data = {
  termicos: [
    {
      icon: faFlaskVial,
      title: 'Mantto. preventivo (Calibración y ajuste de combustión)',
      description: 'El servicio consiste en poner en relación Aire/gas los quemadores del horno, boiler, o equipo térmico, de acuerdo a parámetros del quemador o normativa vigente. Además, realizamos un check up del sistema de combustión realizando las pruebas mínimas de seguridad e inspección para identificar posibles áreas de oportunidad.'
    },
    {
      icon: faNetworkWired,
      title: 'Ingeniería conceptual y básica de equipo térmico',
      description: 'Entender las variables físicas de tu proceso es fundamental durante el proceso de conceptualización y diseño de un equipo. Nosotros podemos ayudarte.'
    },
    {
      icon: faProjectDiagram,
      title: 'Desarrollo y optimización de procesos térmicos',
      description: 'En ocasiones los procesos térmicos no cumplen las especificaciones de calidad, productividad o estética, o simplemente están fuera de control. Podemos asesorarte para maximizar el valor de tu proceso.'
    },
    {
      icon: faMicroscope,
      title: 'Simulación CFD',
      description: 'La simulación CFD te permite entender la dinámica de fluidos y los fenómenos de transporte de calor que suceden internamente en el equipo, lo cual permite optimizar diseños o ajustar variables en el proceso.'
    },
    {
      icon: faFan,
      title: 'Comisionamiento de equipo de combustión',
      description: 'El proceso de comisionamiento es el arranque de tu equipo de combustión. Podemos supervisar la instalación de tu equipo o realizar las pruebas adecuadas de operación y seguridad para alargar su vida útil.'
    },
    {
      icon: faGasPump,
      title: 'Análisis e impacto de cambio de combustible',
      description: 'Si dentro de los planes de tu organización se requiere evaluar el uso de otros combustibles alternos o convencionales y sus implicaciones en tu proceso o equipo, podemos ayudarte.'
    },
    {
      icon: faThermometerHalf,
      title: 'Análisis de termografía',
      description: '¿Las temperaturas superficiales de tu equipo son muy altas o necesitas cuantificar qué temperatura debería tener? Nosotros podemos guiarte en dicho análisis.'
    },
    {
      icon: faGasPump,
      title: 'Análisis de gases',
      description: '¿Necesitas conocer si tu equipo opera de forma óptima o tienes una próxima evaluación ambiental y no sabes si tu equipo está en norma? Podemos medir las emisiones de tu equipo y, si es necesario, disminuirlas con ajuste de la combustión.'
    },
    {
      icon: faCalculator,
      title: 'Cálculos de balance de energía',
      description: '¿Requieres cuantificar el posible consumo teórico de un equipo o el impacto térmico de un aumento en la producción? Podemos ayudarte en tu requerimiento.'
    },
    {
      icon: faTools,
      title: 'Refacciones de equipo de combustión e instrumentación',
      description: 'Proveemos refacciones de combustión e instrumentación de cualquiera de las marcas del mercado nacional al mejor precio y con los mejores tiempos de entrega.'
    }
  ],
  energeticos: [
    {
      icon: faProjectDiagram,
      title: 'Análisis y Formulación de roadmap de descarbonización',
      description: 'Ofrecemos consultoría para guiarte en la definición de objetivos, métricas y la generación de tu propio roadmap hacia el Net Zero.'
    },
    {
      icon: faLightbulb,
      title: '“Energy security” análisis',
      description: 'Un análisis de seguridad energética puede ayudarte a identificar vulnerabilidades en tu organización, clarificar el entorno energético y anticiparte a los cambios globales.'
    },
    {
      icon: faSeedling,
      title: 'Cálculo de huella de carbono',
      description: 'Si requieres estimar el impacto ambiental de tus operaciones o procesos y definir metas de disminución, necesitas un cálculo de huella de carbono.'
    },
    {
      icon: faBolt,
      title: 'Eficiencia en equipos eléctricos',
      description: '¿Necesitas disminuir los costos de energía eléctrica? Evaluamos cualquier equipo y te indicamos cómo reducir su consumo.'
    },
    {
      icon: faFlask,
      title: 'Análisis de implementación de Hidrógeno verde',
      description: '¿Estás interesado en implementar tecnologías de hidrógeno verde? Entendemos tu proceso y te decimos cómo y dónde aplicarlas.'
    },
    {
      icon: faSolarPanel,
      title: 'Análisis de factibilidad o dimensionamiento de sistemas fotovoltaicos',
      description: 'Evaluamos la implementación de tecnología fotovoltaica y su potencial de ahorro de energía eléctrica.'
    },
    {
      icon: faTools,
      title: 'Análisis de factibilidad o dimensionamiento de sistemas termosolares',
      description: 'Para aplicaciones de baja temperatura, evaluamos el aprovechamiento térmico solar para disminuir costos de gas y diseñamos tu sistema.'
    },
    {
      icon: faChartLine,
      title: 'Análisis técnico-económico de tecnologías energéticas',
      description: 'Te ayudamos a seleccionar la mejor solución técnica y económicamente viable, con el menor impacto ambiental.'
    },
    {
      icon: faChalkboardTeacher,
      title: 'Capacitaciones',
      description: 'Brindamos herramientas a tu equipo de trabajo sobre tecnologías, procesos o áreas clave para tu operación.'
    }
  ],
  especiales: [
    {
      icon: faCogs,
      title: 'Auditoría de seguridad NFPA86',
      description: 'Evaluamos tu sistema de combustión para garantizar su funcionamiento seguro, cumpliendo criterios técnicos y normativos.',
      image: imgSeguridad
    },
    {
      icon: faChalkboardTeacher,
      title: 'Curso de combustión',
      description: 'Capacitamos a personal técnico, operativo o de mantenimiento sobre el funcionamiento de equipos de combustión u hornos.',
      image: imgCombustion
    },
    {
      icon: faRecycle,
      title: 'Auditoría de energía',
      description: 'Te guiamos para disminuir el consumo de gas, evaluar nuevas tecnologías y cuantificar el ahorro energético.',
      image: imgEnergetica
    },
    {
      icon: faChartBar,
      title: 'Consultoría en sistemas de gestión de energía',
      description: 'Te asesoramos en la implementación de un sistema de gestión energética para ahorro continuo y mejora de tus equipos.',
      image: imgGestion
    }
  ]
};

const ServicioCard = ({ icon, title, description, image }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`servicio-card ${open ? 'expanded' : ''}`} onClick={() => setOpen(!open)}>
      {image && <img src={image} alt={title} className="servicio-img" />}
      <FontAwesomeIcon icon={icon} className="servicio-icon" />
      <div>
        <p className="servicio-title">{title}</p>
        {!open && <p className="servicio-vermas">Ver más</p>}
        {open && <p className="servicio-description">{description}</p>}
      </div>
    </div>
  );
};

const Servicios = () => {
  return (
    <section id="servicios" className="servicios-section">
      <section id="servicios-termicos" className="servicios-bloque">
        <h2 className="servicios-title">Servicios Térmicos</h2>
        <div className="servicios-grid">
          {data.termicos.map((c, i) => (
            <ServicioCard key={`t-${i}`} {...c} />
          ))}
        </div>
      </section>

      <section id="servicios-energeticos" className="servicios-bloque">
        <h2 className="servicios-title">Servicios Energéticos</h2>
        <div className="servicios-grid">
          {data.energeticos.map((c, i) => (
            <ServicioCard key={`e-${i}`} {...c} />
          ))}
        </div>
      </section>

      <section id="servicios-especiales" className="servicios-bloque">
        <h2 className="servicios-title">Servicios Especiales</h2>
        <div className="servicios-grid especiales">
          {data.especiales.map((c, i) => (
            <ServicioCard key={`s-${i}`} {...c} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Servicios;
