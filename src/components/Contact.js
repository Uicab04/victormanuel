  import React from 'react';
  import './styles/Contact.css'; // Importa el CSS para la sección de contacto


  const Contact = () => (
    <section id="contacto" className="section">
      <h2 className="section__title">Contacto</h2>
      <div className="section__content2">
        <p className="section__text">Teléfono: +52 9842044835</p>
        <p className="section__text">
          Email: <a href="mailto:victoruicabnahuat@gmail.com" className="section__link">victoruicabnahuat@gmail.com</a>
        </p>
        <p className="section__text">
          GitHub: <a href="https://github.com/Uicab04" target="_blank" rel="noopener noreferrer" className="section__link">Uicab04</a>
        </p>
      </div>
      <div className="map-container">
        <h3 className="map-title">Ubicación</h3>
        <iframe
          title="Mapa de Playa del Carmen"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6937891411504!2d-87.0738856845405!3d20.62895658617962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2a2c5e5c9e0d%3A0x2e7e4c5d8f1b2e0!2sPlaya%20del%20Carmen%2C%20Quintana%20Roo%2C%20Mexico!5e0!3m2!1sen!2sus!4v1634657891234!5m2!1sen!2sus"
          width="300"
          height="250"
          style={{ border: 0 }}
          allowFullScreen="50"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );

  export default Contact;