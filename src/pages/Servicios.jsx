import { useParams, Link } from "react-router-dom";
import WhatsAppFloat from "../WhatsAppFloat";

function Servicios() {
  const { planId } = useParams();

  // Si hay un planId específico, mostrar ese plan
  if (planId === "plan-1") {
    return <Plan1 />;
  }

  if (planId === "plan-2") {
    return <Plan2 />;
  }

  // Si no hay planId, mostrar la página general de servicios
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
            <h2>Plan 1</h2>
            <p className="service-description">
              Solución ideal para negocios que están comenzando su presencia
              digital.
            </p>
            <Link to="/servicios/plan-1" className="service-link">
              Ver detalles →
            </Link>
          </div>

          <div className="service-card">
            <h2>Plan 2</h2>
            <p className="service-description">
              Plan completo para empresas que buscan una solución más robusta y
              personalizada.
            </p>
            <Link to="/servicios/plan-2" className="service-link">
              Ver detalles →
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

function Plan1() {
  return (
    <div className="page">
      <section className="page-section">
        <div className="page-header">
          <h1 className="page-title">Plan 1</h1>
          <p className="page-subtitle">
            La solución perfecta para dar tus primeros pasos en el mundo
            digital.
          </p>
        </div>

        <div className="page-content">
          <div className="content-card">
            <h2>¿Qué incluye?</h2>
            <ul className="feature-list">
              <li>Diseño web responsivo y moderno</li>
              <li>Hasta 5 secciones principales</li>
              <li>Formulario de contacto integrado</li>
              <li>Optimización básica para SEO</li>
              <li>Integración con redes sociales</li>
              <li>Hosting y dominio por 1 año</li>
              <li>Soporte técnico durante 3 meses</li>
            </ul>
          </div>

          <div className="content-card">
            <h2>Ideal para:</h2>
            <p>
              Pequeños negocios, emprendedores, profesionales independientes y
              cualquier persona que necesite una presencia digital profesional
              sin complicaciones.
            </p>
          </div>

          <div className="content-card">
            <h2>Proceso de trabajo</h2>
            <ol className="process-list">
              <li>Reunión inicial para entender tus necesidades</li>
              <li>Propuesta de diseño y estructura</li>
              <li>Desarrollo y revisión de avances</li>
              <li>Pruebas y ajustes finales</li>
              <li>Lanzamiento y entrega</li>
            </ol>
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

function Plan2() {
  return (
    <div className="page">
      <section className="page-section">
        <div className="page-header">
          <h1 className="page-title">Plan 2</h1>
          <p className="page-subtitle">
            Solución completa y personalizada para empresas que buscan destacar
            en el mundo digital.
          </p>
        </div>

        <div className="page-content">
          <div className="content-card">
            <h2>¿Qué incluye?</h2>
            <ul className="feature-list">
              <li>Todo lo del Plan 1, más:</li>
              <li>Diseño completamente personalizado</li>
              <li>Secciones ilimitadas</li>
              <li>Integración con sistemas de pago</li>
              <li>Panel de administración</li>
              <li>Optimización avanzada para SEO</li>
              <li>Integración con Google Analytics</li>
              <li>Blog o sección de noticias</li>
              <li>Galería de imágenes/videos</li>
              <li>Hosting y dominio por 2 años</li>
              <li>Soporte técnico durante 6 meses</li>
              <li>Capacitación para administrar tu sitio</li>
            </ul>
          </div>

          <div className="content-card">
            <h2>Ideal para:</h2>
            <p>
              Empresas establecidas, negocios en crecimiento, e-commerce, y
              cualquier organización que necesite una solución digital robusta y
              escalable.
            </p>
          </div>

          <div className="content-card">
            <h2>Proceso de trabajo</h2>
            <ol className="process-list">
              <li>Reunión estratégica para definir objetivos</li>
              <li>Investigación y análisis de competencia</li>
              <li>Propuesta de diseño personalizada</li>
              <li>Desarrollo iterativo con revisiones constantes</li>
              <li>Integración de funcionalidades avanzadas</li>
              <li>Pruebas exhaustivas y optimización</li>
              <li>Lanzamiento y capacitación</li>
              <li>Seguimiento y soporte continuo</li>
            </ol>
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

