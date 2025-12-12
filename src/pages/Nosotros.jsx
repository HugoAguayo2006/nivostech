import WhatsAppFloat from "../WhatsAppFloat";

function Nosotros() {
  return (
    <div className="page">
      <section className="page-section">
        <div className="page-header">
          <h1 className="page-title">Nosotros</h1>
          <p className="page-subtitle">
            Conoce más sobre NIVO y nuestra pasión por crear presencia digital
            para tu negocio.
          </p>
        </div>

        <div className="page-content">
          <div className="content-card">
            <h2>¿Quiénes somos?</h2>
            <p>
              NIVO es un estudio especializado en diseño y desarrollo de páginas
              web con sede en Guadalajara. Nos dedicamos a crear soluciones
              digitales que impulsen la presencia online de tu negocio.
            </p>
          </div>

          <div className="content-card">
            <h2>Nuestra misión</h2>
            <p>
              Generar presencia digital para tu negocio mediante páginas web
              modernas, funcionales y optimizadas que reflejen la esencia de tu
              marca y conecten con tu audiencia.
            </p>
          </div>

          <div className="content-card">
            <h2>Nuestro enfoque</h2>
            <p>
              Trabajamos de cerca contigo para entender tus necesidades y
              objetivos. Cada proyecto es único y lo desarrollamos con atención
              al detalle, desde la conceptualización hasta el lanzamiento.
            </p>
          </div>

          <div className="content-card">
            <h2>¿Por qué elegirnos?</h2>
            <ul className="feature-list">
              <li>Diseño moderno y profesional</li>
              <li>Desarrollo optimizado y rápido</li>
              <li>Atención personalizada</li>
              <li>Compromiso con la calidad</li>
              <li>Experiencia en diferentes industrias</li>
            </ul>
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

export default Nosotros;

