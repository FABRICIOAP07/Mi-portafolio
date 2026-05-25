import React from 'react';

export const ProjectCard = ({ title, description, tags, githubUrl, demoUrl }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      
      <div style={{ margin: '15px 0' }}>
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        {demoUrl && (
          <a 
            href={demoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn"
          >
            Probar App 
          </a>
        )}
        
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-secondary"
          style={{ background: '#334155' }}
        >
          GitHub 
        </a>
      </div>
    </div>
  );
};