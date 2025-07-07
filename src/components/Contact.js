  import React from 'react';
  import './styles/Contact.css'; // Importa el CSS para la sección de contacto


  const Contact = () => (
    <section id="contacto" className="section">
      <h2 className="section__title">Contacto</h2>
      <div className="section__content2">
        <p className="section__text">Teléfono: +52 9989389060</p>
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
          title="Mapa de Cancun riviera maya"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.524726725977!2d-86.84750338506244!3d21.161908888995695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2be3e7e78dab%3A0x9e6d5c9f4e5e2e4e!2sCanc%C3%BAn%2C%20Quintana%20Roo%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1720367100000!5m2!1ses-419!2smx"
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
