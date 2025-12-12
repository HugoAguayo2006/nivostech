import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleMouseEnter = () => {
    // Cancelar cualquier timeout pendiente
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    // Agregar un delay antes de cerrar
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200); // 200ms de delay
  };

  // Limpiar timeout al desmontar
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Overlay difuminado para el área superior */}
      <div className="top-blur-overlay"></div>
      
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src="/logos/logonivos3.png" alt="Nivos" className="logo-left" />
          <img src="/logos/logonivos1.png" alt="Nivos" className="logo-right" />
        </Link>

      <div className="nav-links">
        <Link
          to="/"
          className={isActive("/") ? "nav-link active" : "nav-link"}
        >
          Inicio
        </Link>

        <Link
          to="/nosotros"
          className={isActive("/nosotros") ? "nav-link active" : "nav-link"}
        >
          Nosotros
        </Link>

        <div
          ref={dropdownRef}
          className="nav-dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={`nav-link dropdown-toggle ${
              location.pathname.startsWith("/servicios") ? "active" : ""
            }`}
          >
            Servicios
            <span className="dropdown-arrow">▼</span>
          </button>

          {isServicesOpen && (
            <div 
              className="dropdown-menu"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/servicios/plan-1"
                className="dropdown-item"
                onClick={() => setIsServicesOpen(false)}
              >
                Plan 1
              </Link>
              <Link
                to="/servicios/plan-2"
                className="dropdown-item"
                onClick={() => setIsServicesOpen(false)}
              >
                Plan 2
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/contacto"
          className={isActive("/contacto") ? "nav-link active" : "nav-link"}
        >
          Contacto
        </Link>
      </div>

      <Link to="/contacto" className="cta-button">
        Cotizar Proyecto
      </Link>
    </nav>
    </>
  );
};

export default Navbar;

