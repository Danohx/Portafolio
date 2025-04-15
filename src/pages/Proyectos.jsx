import { FaLaptopCode, FaMobileAlt, FaCodeBranch } from 'react-icons/fa';
import projectsData from '../data/projects.json';
import "../styles/Proyectos.css";

const Proyectos = () => {
  // Mapeo de iconos
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'mobile': return <FaMobileAlt className="project-icon" />;
      case 'laptop': return <FaLaptopCode className="project-icon" />;
      case 'code': return <FaCodeBranch className="project-icon" />;
      default: return <FaLaptopCode className="project-icon" />;
    }
  };

  return (
    <section id="projects" className="project-section">
      {/* Encabezado - IDÉNTICO al que tenías */}
      <div className="section-header">
        <h2>Mis <span className="highlight">Proyectos</span></h2>
        <div className="underline"></div>
      </div>

      {/* Lista de proyectos - Misma estructura */}
      <div className="project-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="projects-card">
            <div className="project-header">
              {getIcon(project.icon)}
              <h3>{project.title}</h3>
            </div>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            <a 
              href={project.link} 
              className="project-link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Ver más →
            </a>
          </div>
        ))}
      </div>

      {/* Nota final - Igual que antes */}
      <p className="projects-note">
        ✨ Más proyectos en mi <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>
    </section>
  );
};

export default Proyectos;