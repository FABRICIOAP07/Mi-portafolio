export const ProjectCard = ({ title, description, tags, imageUrl, githubUrl, demoUrl }) => {
  return (
    <div className="card-proyecto">
      {/* 1. Captura de pantalla */}
      <div className="proyecto-imagen">
        <img src={imageUrl} alt={`Captura de ${title}`} />
      </div>

      {/* 2. Información del proyecto */}
      <div className="proyecto-info">
        <h3>{title}</h3>
        <p>{description}</p>
        
        {/* Etiquetas de las tecnologías usadas */}
        <div className="proyecto-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>

        {/* 3. Enlaces al código y a la demo */}
        <div className="proyecto-links">
          <a href={githubUrl}   className="btn-code">
            Ver Código (GitHub)
          </a>
          {demoUrl && (
            <a href={demoUrl} className="btn-demo">
              Probar App 
            </a>
          )}
        </div>
      </div>
    </div>
  );
};