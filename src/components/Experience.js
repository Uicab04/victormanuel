
import React from 'react';
import './styles/Experience.css'; // Importa el archivo CSS

const ExperienceSection = ({ title, items }) => (
  <>
    <h3 className="section__subtitle">{title}</h3>
    <ul className="section__list">
      {items.map((item, index) => (
        <li key={index} className="section__list-item">{item}</li>
      ))}
    </ul>
  </>
);

const Experience = () => {
    const frontendSkills = [
      "HTML, CSS y JavaScript: Diseño y desarrollo de interfaces de usuario atractivas y funcionales.",
      "Responsive Web Design: Creación de sitios web que se adaptan a diferentes dispositivos y tamaños de pantalla.",
      "Frameworks y Librerías: Experiencia con React, Angular, Bootstrap, Materialize y jQuery."
    ];
  
    const backendSkills = [
      "PHP: Creación de lógica de servidor, manejo de formularios, acceso a bases de datos.",
      "Python: Desarrollo de aplicaciones web utilizando Flask.",
      "MySQL: Diseño y administración de bases de datos relacionales."
    ];
  
    const otherSkills = [
      "Seguridad Web: Uso de HTTPS, autenticación y autorización.",
      "Version Control: Git para colaborar eficientemente en proyectos.",
      "Hosting: Gestión de proyectos en AWS y Azure.",
      "Manejo de Servidores Linux: Administración, configuración y monitoreo de servidores Linux.",
      "Aplicaciones Móviles con Flutter: Desarrollo de aplicaciones móviles multiplataforma.",
      "Creación de Animaciones en Blender: Diseño y producción de animaciones 3D.",
      "Arduino: Desarrollo de proyectos electrónicos y programación de microcontroladores.",
      "Lenguaje Ensamblador: Programación de bajo nivel para control directo del hardware.",
      "Redes: Configuración, administración y monitoreo de redes."


    ];
  
    return (
      <section id="experiencia" className="section">
        <h2 className="section__title">Resumen Profesional</h2>
        <div className="section__content">
          <ExperienceSection title="Frontend" items={frontendSkills} />
         
          <ExperienceSection title="Backend" items={backendSkills} />
          
          <ExperienceSection title="Otras Habilidades" items={otherSkills} />
        </div>
      </section>  
    );
  };
  

export default Experience;
