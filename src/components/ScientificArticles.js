import React from 'react'; 
import './styles/ScientificArticles.css';

const articles = [
  {
    title: "Optimizing Large Language Models to Improve Their Computational Efficiency",
    description: "A study on techniques for enhancing the performance of large language models.",
    pdfLink: "/pdfs/Optimizing_Large_Language_Models.pdf", // Asegúrate de que la ruta esté correcta
  },
  {
    title: "Deseño e implementación de una plataforma E-Learning para capacitación de lujo y elegancia para los colaboradores de Grand Velas Riviera Maya",
    description: "E-Learning de lujo para la capacitación de los colaboradores de Grand Velas Riviera Maya. Esta plataforma se desarrollará con el propósito de mejorar la eficiencia y la calidad del servicio al cliente, proporcionando acceso a contenidos de capacitación personalizados y flexibles.",
    pdfLink: "/pdfs/10.INFORME_FINAL.pdf", // Asegúrate de que la ruta esté correcta
  },
  {
    title: "Aprendizaje personalizado en línea para la educación",
    description: "Aprendizaje personalizado utilizando inteligencia artificial y tecnologías avanzadas para mejorar la educación",
    pdfLink: "/pdfs/ARTICULO_borrador_2.pdf", // Asegúrate de que la ruta esté correcta
  },
  {
    title: "Centralizacion de pedientes médicos",
    description: "Autor: Victor Manuel Uicab Nahuat",
    pdfLink: "/pdfs/ExpedientesMedicos.pdf", // Asegúrate de que la ruta esté correcta
  },
  // Agrega más artículos según sea necesario
];

const ScientificArticles = () => {
  return (
    <section id="articulos" className="section">
      <h2 className="section__title">Artículos Científicos</h2>

      {/* Lista de Artículos con vista previa automática */}
      <div className="scientific-articles__content">
        {articles.map((article, index) => (
          <div key={index} className="scientific-articles__item">
            <h3 className="scientific-articles__item-title">{article.title}</h3>
            <p className="scientific-articles__item-description">{article.description}</p>

            {/* Vista Previa del PDF automáticamente cargada */}
            <iframe
              title={`Vista Previa del PDF: ${article.title}`}
              src={article.pdfLink}
              width="100%"
              height="600px"
              style={{ border: 'none', marginTop: '20px' }}
            />
            <a href={article.pdfLink} target="_blank" rel="noopener noreferrer" className="scientific-articles__download-button">
              Descargar PDF
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScientificArticles;
