import { FaCode, FaServer, FaCamera, FaGamepad, FaHeadphones, FaJava } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiPython, SiCplusplus, SiExpress } from 'react-icons/si';
import "../styles/About.css";

const About = () => {
  return (
    <div id="about" className="about-container">
      {/* Encabezado */}
      <div className="section-header">
        <h2>Sobre <span className="highlight">Mí</span></h2>
        <div className="underline"></div>
      </div>

      {/* Contenido principal */}
      <div className="about-content">
        {/* Columna izquierda - Texto */}
        <div className="about-text">
          <p className="about-intro">
            ¡Hola! Soy <span className="highlight">Danohx</span>, 
            desarrollador Full Stack apasionado por crear soluciones digitales innovadoras y eficientes.
          </p>

          <p className="about-description">
            Con experiencia en el desarrollo de aplicaciones web, desde el frontend interactivo 
            hasta APIs. Me especializo en JavaScript, React Native y disfruto transformando ideas en código funcional.
          </p>

          <div className="about-features">
            <div className="feature-item">
              <FaCode className="feature-icon" />
              <div>
                <h3>Enfoque</h3>
                <p>
                  Desarrollo limpio, escalable y centrado en la experiencia del usuario.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <FaServer className="feature-icon" />
              <div>
                <h3>Actualidad</h3>
                <p>
                  Aprendiendo el desarrollo de IoT con ESP32 y mejorando mis skills en DevOps.
                </p>
              </div>
            </div>
            
            <div className="feature-item">
              <FaHeadphones className="feature-icon" />
              <div>
                <h3>Música</h3>
                <p>
                  Fan de Charles Ans y Gera MX, su música me acompaña mientras programo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna derecha - Habilidades e intereses */}
        <div className="about-skills">
          {/* Tecnologías */}
          <div className="skills-block">
            <h3>Tecnologías</h3>
            <div className="skills-container">
              <div className="skill-item">
                <SiJavascript className="tech-icon js-icon" />
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <SiReact className="tech-icon react-icon" />
                <span>React</span>
              </div>
              <div className="skill-item">
                <SiReact className="tech-icon react-icon" />
                <span>React Native + Expo</span>
              </div>
              <div className="skill-item">
                <SiNodedotjs className="tech-icon node-icon" />
                <span>Node.js</span>
              </div>
              <div className="skill-item">
                <SiExpress className="tech-icon express-icon" />
                <span>ExpressAPI</span>
              </div>
              <div className="skill-item">
                <SiCplusplus className="tech-icon cpp-icon" />
                <span>C/C++</span>
              </div>
              <div className="skill-item">
                <FaJava className="tech-icon java-icon" />
                <span>Java</span>
              </div>
              <div className="skill-item">
                <SiPython className="tech-icon python-icon" />
                <span>Python</span>
              </div>
            </div>
          </div>

          {/* Intereses */}
          <div className="skills-block">
            <h3>Intereses</h3>
            <div className="skills-container">
              <div className="skill-item">
                <FaCamera className="interest-icon photo-icon" />
                <span>Fotografía</span>
              </div>
              <div className="skill-item">
                <FaGamepad className="interest-icon game-icon" />
                <span>Videojuegos</span>
              </div>
              <div className="skill-item">
                <FaHeadphones className="interest-icon music-icon" />
                <span>Rap & Hip-Hop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;