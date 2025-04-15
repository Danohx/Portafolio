const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="img-placeholder">
        {/* Placeholder para imágenes */}
        <div className="img-text">{project.title[0]}</div>
      </div>
      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <a href={project.link} className="project-link">
          Ver más →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
