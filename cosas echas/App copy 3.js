import React from 'react';
import PropTypes from 'prop-types'; // Importar PropTypes para validación de props
import './App.css'; // Asegúrate de importar el archivo CSS

// Componente para mostrar la sección "Sobre Mí"
const AboutMe = () => (
  <section id="sobre-mi" className="section">
    <h2 className="section__title">Sobre Mí</h2>
    <p className="section__content">
      Mi objetivo es proporcionar soluciones efectivas y de alta calidad a mis clientes, asegurándome de que sus objetivos de desarrollo web se cumplan con éxito. Creo firmemente en el poder de la colaboración y la sinergia para lograr resultados sobresalientes.
    </p>
  </section>
);

// Componente para mostrar la sección "Experiencia"
const Experience = () => (
  <section id="experiencia" className="section">
    <h2 className="section__title">Resumen Profesional</h2>
    <div className="section__content">
      <h3 className="section__subtitle">Frontend</h3>
      <ul className="section__list">
        <li className="section__list-item">HTML, CSS y JavaScript: Diseño y desarrollo de interfaces de usuario atractivas y funcionales.</li>
        <li className="section__list-item">Responsive Web Design: Creación de sitios web que se adaptan a diferentes dispositivos y tamaños de pantalla.</li>
        <li className="section__list-item">Frameworks y Librerías: Experiencia con Bootstrap, Materialize y jQuery.</li>
      </ul>
      <h3 className="section__subtitle">Backend</h3>
      <ul className="section__list">
        <li className="section__list-item">PHP: Creación de lógica de servidor, manejo de formularios, acceso a bases de datos.</li>
        <li className="section__list-item">Python: Desarrollo de aplicaciones web utilizando Flask.</li>
        <li className="section__list-item">MySQL: Diseño y administración de bases de datos relacionales.</li>
      </ul>
      <h3 className="section__subtitle">Otras Habilidades</h3>
      <ul className="section__list">
        <li className="section__list-item">Seguridad Web: Uso de HTTPS, autenticación y autorización.</li>
        <li className="section__list-item">Version Control: Git para colaborar eficientemente en proyectos.</li>
        <li className="section__list-item">Hosting: Gestión de proyectos en AWS y Azure.</li>
      </ul>
    </div>
  </section>
);

// Componente para mostrar la sección "Educación"
const Education = () => (
  <section id="educacion" className="section">
    <h2 className="section__title">Educación</h2>
    <ul className="section__list">
      <li className="section__list-item">Ingeniería en Sistemas Computacionales - Instituto Tecnológico Superior Felipe Carrillo Puerto (2019 – 2024)</li>
      <li className="section__list-item">Técnico en Soporte y Mantenimiento de Equipo de Cómputo - Centro de Bachillerato Tecnológico Agropecuario No. 80 (2016-2019)</li>
    </ul>
  </section>
);

// Componente para mostrar la sección "Contacto"
const Contact = () => (
  <section id="contacto" className="section">
    <h2 className="section__title">Contacto</h2>
    <div className="section__content">
      <p className="section__text">Teléfono: +52 9842044835</p>
      <p className="section__text">
        Email: <a href="mailto:victoruicabnahuat@gmail.com" className="section__link">victoruicabnahuat@gmail.com</a>
      </p>
      <p className="section__text">
        GitHub: <a href="https://github.com/Uicab04" target="_blank" rel="noopener noreferrer" className="section__link">Uicab04</a>
      </p>
    </div>
  </section>
);

// Componente principal de la aplicación
function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="header__content">
          <h1 className="header__title">Victor Manuel Uicab Nahat</h1>
          <p className="header__subtitle">Ingeniero en Sistemas</p>
          <nav className="header__nav" aria-label="Navegación principal">
            <ul className="header__nav-list">
              <li className="header__nav-item"><a href="#sobre-mi" className="header__nav-link">Sobre Mí</a></li>
              <li className="header__nav-item"><a href="#experiencia" className="header__nav-link">Experiencia</a></li>
              <li className="header__nav-item"><a href="#educacion" className="header__nav-link">Educación</a></li>
              <li className="header__nav-item"><a href="#contacto" className="header__nav-link">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main">
        <AboutMe />
        <Experience />
        <Education />
        <Contact />
      </main>

      <footer className="footer">
        <p className="footer__text">&copy; 2024 Victor Manuel Uicab Nahat. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;