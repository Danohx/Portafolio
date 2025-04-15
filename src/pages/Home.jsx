import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="portfolio-container">
      {/* Sección Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>¡Hola! Soy <span className="highlight">Danohx</span> 👋</h1>
          <p className="subtitle">Desarrollador Full Stack & Diseñador UI/UX</p>
          <p className="description">
            Estudiante apasionado por crear experiencias web únicas y funcionales.
            ¡Bienvenido a mi portafolio digital!
          </p>
          <div className="cta-buttons">
            <a href="/Contacto" className="cta-primary">Contáctame</a>
            <a href="/about" className="cta-secondary">Sobre mí</a>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="decoration-element"></div>
          <div className="decoration-element"></div>
          <div className="decoration-element"></div>
        </div>
      </section>

      {/* Sección de Proyectos */}
      <section className="projects-section">
        <div className="section-header">
          <h2>Mis Proyectos</h2>
          <div className="underline"></div>
        </div>
        
        <div className="projects-grid">
          {projectsData.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="see-all">
          <a href="/Proyectos" className="see-all-link">
            Ver todos los proyectos →
          </a>
        </div>
      </section>

      {/* Sección de Habilidades */}
      <section className="skills-section">
        <div className="section-header">
          <h2>Tecnologías que manejo</h2>
          <div className="underline"></div>
        </div>
        
        <div className="skills-container">
          <div className="skill-item">React</div>
          <div className="skill-item">React Native + Expo</div>
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">TypeScript</div>
          <div className="skill-item">HTML5</div>
          <div className="skill-item">CSS3</div>
          <div className="skill-item">Node.js</div>
          <div className="skill-item">C/C++</div>
          <div className="skill-item">Java</div>
        </div>
      </section>
    </div>
  );
};

export default Home;