import { Link } from 'react-router-dom';
import '../styles/Footer.css'; // Archivo de estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo o nombre */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">Danohx</Link>
          <p>El código es poesía... y a veces, un buen bug es metáfora</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} Danohx. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;