import React from 'react';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Projects from './components/Projects';
import ScientificArticles from './components/ScientificArticles'; // Import the new component
import './App.css';

function App() {
  const downloadCV = () => {
    const cvUrl = 'pdfs/CV_VICTOR_MANUEL_UICAB_NAHUAT.pdf';  // Reemplaza esta ruta con el URL correcto de tu CV
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'pdfs/CV_VICTOR_MANUEL_UICAB_NAHUAT.pdf'; // Nombre del archivo que se descargará
    link.click();
  };

  return (
    <div className="container">
      <header className="header">
        <div className="header__content">
          <div className="header__profile">
            <img src="/imagen/PicsArt_11-06-03.30.05.jpg" alt="Foto de perfil" className="header__profile-image" />
            <img src="/imagen/PicsArt_11-06-03.30.05.jpg" alt="Previsualización de la foto de perfil" className="header__profile-image-preview" />
          </div>
          <div className="header__info">
            <div className="header__text">
              <h1 className="header__title">Victor Manuel Uicab Nahat</h1>
              <p className="header__subtitle">Ingeniero en Sistemas</p>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item"><a href="#sobre-mi" className="header__nav-link">Sobre Mí</a></li>
                <li className="header__nav-item"><a href="#custom-proyectos" className="header__nav-link">Proyectos</a></li>
                {/* Botón de descarga de CV */}
                <li className="header__nav-item">
                  <a href="#CV" className="header__nav-link" onClick={downloadCV}>
                    CV
                  </a>
                </li>
                {/*<li className="header__nav-item"><a href="#educacion" className="header__nav-link">Educación</a></li>*/}
                <li className="header__nav-item"><a href="#contacto" className="header__nav-link">Contacto</a></li>
                <li className="header__nav-item"><a href="#articulos" className="header__nav-link">Articulos cientificos</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="main">
        <AboutMe />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <ScientificArticles /> {/* Add the new component here */}
        
      </main>

      <footer className="footer">
        <p className="footer__text">© 2024 Victor Manuel Uicab Nahat. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
