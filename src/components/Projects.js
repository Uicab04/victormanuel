import React, { useState } from 'react';
import './styles/Projects.css';
import './styles/NeonIcons.css';

const ProjectModal = ({ project, onClose }) => {
  console.log("Selected Project:", project); // Debugging statement
  return (
    <div className="project-modal">
      <div className="project-modal__content">
        <div className="project-modal__header">
          <button className="project-modal__close" onClick={onClose}>X</button>
        </div>
        <div className="project-modal__flex-container">
          <img src={project.image} alt={project.title} className="project-modal__image" />
          <div className="project-modal__details">
            <div className="project-modal__buttons">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-modal__button">Pagina web</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-modal__button">GitHub</a>
            </div>
            <h3 className="project-modal__title">{project.title}</h3>
            <p className="project-modal__description">{project.description}</p>
            <p><strong>Fecha:</strong> {project.date}</p>
            <p><strong>Tipo de Proyecto:</strong> {project.type}</p>
            <p><strong>Descripción:</strong> {project.details}</p>
            <p><strong>Tecnologías:</strong> {project.technologies.join(', ')}</p>
            {project.adminUser && (
              <>
                <p><strong>Administrador:</strong></p>
                <p><strong>Usuario:</strong> {project.adminUser}</p>
                <p><strong>Contraseña:</strong> {project.adminPassword}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Project = ({ title, description, link, github, image, technologies, adminUser, adminPassword, type, date, onSelect }) => {
  return (
    <div className="custom-project">
      <div className="custom-project__image-container">
        <div className="custom-project__type">{type}</div>
        <img src={image} alt={title} className="custom-project__image" />
        <div className="custom-project__overlay">
          <h3 className="custom-project__title-static">{title}</h3>
        </div>
      </div>
      <div className="custom-project__technologies">
        {technologies.map((tech, index) => (
          <div key={index} className={`icon ${tech.toLowerCase()}`}>{tech}</div>
        ))}
      </div>
      <button onClick={() => onSelect({ title, description, link, github, image, technologies, adminUser, adminPassword, type, date })} className="custom-project__link">Ver Proyecto</button>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Geek",
      description: "Formar comunidad de programadores para compra de proyectos.",
      link: "https://geek-two.vercel.app/",
      github: "https://github.com/Uicab04/geek",
      image: "imagen/GEEK.png",
      technologies: ["React", "JS"],
      type: "Comunidad de Programadores",
      date: "sep. 2024 - en proceso",
      details: "Plataforma para la compra y venta de proyectos de programación.",
    },
    {
      title: "Learn Velas",
      description: "Es una página de apredizaje E-learning para los colaboradores de Grand Velas Riviera Maya.",
      link: "http://learnvelas.wuaze.com/",
      github: "https://github.com/Uicab04/learnvelas",
      image: "imagen/learnvlas.png",
      technologies: ["PHP", "JS", "MySQL"],
      type: "E-learning",
      date: "ene. 2024 - may. 2024",
      details: "Página de E-learning para hotel de lujo.",
      adminUser: "uicab.nahuat.victor@cbta80.edu.mx",
      adminPassword: "aaaa"
    },
    {
      title: "Expendios BIMBO",
      description: "Fue un sistema para los expendios BIMBO.",
      link: "http://expendiobimbo.kesug.com/",
      github: "https://github.com/Uicab04/expendio",
      image: "imagen/expendio.png",
      technologies: ["PHP", "JS", "MySQL"],
      type: "Sistema de Gestión",
      date: "ene. 2022 - ene. 2023",
      details: "Sistema para la gestión de expendios BIMBO.",
      adminUser: "uicab.nahuat.victor@cbta80.edu.mx",
      adminPassword: "aaaa"
    },
    {
      title: "HealtFolder",
      description: "Centralización de expedientes médicos.",
      link: "http://healtfolder.kesug.com/",
      github: "https://github.com/Uicab04/HealthFolder",
      image: "imagen/image.png",
      technologies: ["PHP", "JS", "MySQL"],
      type: "Expedientes Médicos",
      date: "ene. 2022 - ene. 2023",
      details: "Centralización de expedientes médicos.",
      adminUser: "uicab.nahuat.victor@cbta80.edu.mx",
      adminPassword: "aaaa"
    },
    {
      title: "Gato vs Máquina",
      description: "Un emocionante juego donde un astuto gato compite contra una máquina inteligente en una serie de desafíos estratégicos.",
      link: "https://uicab04.github.io/GatoMaquina/",
      github: "https://github.com/Uicab04/GatoMaquina",
      image: "imagen/Gato.png", // Ruta de la imagen
      technologies: ["JS", "HTML", "CSS"],
      type: "Juego Interactivo",
      date: "mar. 2023 - abr. 2023",
      details: "Gato vs Máquina es un juego interactivo donde los jugadores pueden elegir entre jugar como un gato ingenioso o como una máquina calculadora. El juego presenta diferentes niveles de dificultad y permite a los jugadores usar estrategias para ganar puntos y superar a su oponente."
    },

    

  ];

  return (
    <section id="custom-proyectos" className="custom-section">
      <h2 className="custom-section__title">Proyectos Realizados</h2>
      <div className="custom-section__content">
        {projects.map((project, index) => (
          <Project 
            key={index} 
            title={project.title} 
            description={project.description} 
            link={project.link} 
            github={project.github} // Pasa la variable github

            image={project.image} 
            technologies={project.technologies}
            adminUser={project.adminUser}
            adminPassword={project.adminPassword}
            type={project.type}
            date={project.date}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;