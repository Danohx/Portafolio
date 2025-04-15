import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Navbar.css"; // Archivo CSS para estilos
 
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
 
  // Efecto para detectar scroll y cambiar la apariencia del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
 
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  // Cerrar el menú móvil al hacer clic fuera
  useEffect(() => {
    if (isMenuOpen) {
      const closeMenu = () => setIsMenuOpen(false);
      document.addEventListener("click", closeMenu);
      return () => document.removeEventListener("click", closeMenu);
    }
  }, [isMenuOpen]);
 
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Logo/Nombre */}
      <div className="navbar-brand">
        <Link to="/" className="logo">
          Danohx<span className="dot">.</span>
        </Link>
      </div>
 
      {/* Menú para desktop */}
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-link">Inicio</Link>
        </li>
        <li>
          <Link to="/proyectos" className="nav-link">Proyectos</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">Sobre Mí</Link>
        </li>
        <li>
          <Link to="/contacto" className="nav-link contact-btn">Contacto</Link>
        </li>
      </ul>
 
      {/* Botón móvil */}
      <button
        className="navbar-toggle"
        onClick={(e) => {
          e.stopPropagation();
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <div className={`menu-icon ${isMenuOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
 
      {/* Menú móvil (solo aparece al hacer clic) */}
      {isMenuOpen && (
        <div className="navbar-mobile-container">
          <ul className="navbar-mobile">
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/proyectos" onClick={() => setIsMenuOpen(false)}>
                Proyectos
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                Sobre Mí
              </Link>
            </li>
            <li>
              <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
 
export default Navbar;
