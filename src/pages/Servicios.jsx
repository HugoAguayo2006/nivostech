import { useParams, Link } from "react-router-dom";
import WhatsAppFloat from "../WhatsAppFloat";
import Plan1 from "./planes/Plan1";
import Plan2 from "./planes/Plan2";

function Servicios() {
  const { planId } = useParams();

  // Si hay un planId específico, mostrar ese plan
  if (planId === "plan-1") {
    return <Plan1 />;
  }

  if (planId === "plan-2") {
    return <Plan2 />;
  }

  // Si no hay planId, mostrar la página general de servicios con resumen
  return (
    <div className="page">
      <section className="page-section">
        <div className="page-header">
          <h1 className="page-title">Nuestros Servicios</h1>
          <p className="page-subtitle">
            Ofrecemos diferentes planes para adaptarnos a las necesidades de tu
            negocio.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <h2>Plan 1: Landing Extendida</h2>
            <p className="service-description">
              <strong>Ideal para negocios que solo necesitan presencia profesional.</strong>
            </p>
            <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              <p><strong>Incluye:</strong></p>
              <ul style={{ textAlign: 'left', marginLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>Diseño completo de 5 páginas (Home, Nosotros, Contacto, Blog estático, Galería)</li>
                <li>Desarrollo 100% frontend</li>
                <li>Sitio rápido, responsivo y optimizado</li>
                <li>Integración de WhatsApp, Google Maps, correo y redes sociales</li>
                <li>Soporte técnico inicial (7–14 días)</li>
              </ul>
              <p style={{ fontSize: '1.5rem', color: '#4A90E2', fontWeight: 'bold', marginTop: '1rem' }}>
                Precio: $9,000
              </p>
            </div>
            <Link 
              to="/servicios/plan-1" 
              className="service-link" 
              style={{ 
                display: 'inline-block', 
                padding: '0.75rem 1.5rem', 
                backgroundColor: '#4A90E2', 
                color: 'white', 
                textDecoration: 'none', 
                borderRadius: '8px',
                fontWeight: 'bold',
                transition: 'background-color 0.3s',
                cursor: 'pointer',
                pointerEvents: 'auto',
                position: 'relative',
                zIndex: 10
              }}
            >
              Ver más →
            </Link>
          </div>

          <div className="service-card">
            <h2>Plan 2: Sitio Profesional</h2>
            <p className="service-description">
              <strong>Ideal para negocios que necesitan un sistema más completo.</strong>
            </p>
            <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              <p><strong>Incluye:</strong></p>
              <ul style={{ textAlign: 'left', marginLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>Todo lo del plan frontend + funcionalidades avanzadas</li>
                <li>Backend y base de datos (API personalizada, PostgreSQL/MySQL/MongoDB)</li>
                <li>Panel administrativo o dashboard</li>
                <li>Blog totalmente administrable</li>
                <li>Gestión de productos, servicios, usuarios o contenido</li>
                <li>Endpoints protegidos con autenticación</li>
              </ul>
              <p style={{ fontSize: '1.5rem', color: '#4A90E2', fontWeight: 'bold', marginTop: '1rem' }}>
                Precio: $14,000
              </p>
            </div>
            <Link 
              to="/servicios/plan-2" 
              className="service-link" 
              style={{ 
                display: 'inline-block', 
                padding: '0.75rem 1.5rem', 
                backgroundColor: '#4A90E2', 
                color: 'white', 
                textDecoration: 'none', 
                borderRadius: '8px',
                fontWeight: 'bold',
                transition: 'background-color 0.3s',
                cursor: 'pointer',
                pointerEvents: 'auto',
                position: 'relative',
                zIndex: 10
              }}
            >
              Ver más →
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppFloat />

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} NIVO · Diseño y desarrollo de páginas
          web.
        </p>
      </footer>
    </div>
  );
}

export default Servicios;

