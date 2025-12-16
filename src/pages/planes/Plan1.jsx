import { Helmet } from "react-helmet-async";
import WhatsAppFloat from "../../WhatsAppFloat";

function Plan1() {
  return (
    <>
      {/* ================= SEO (PLAN 1) ================= */}
      <Helmet>
        <title>Plan 1: Landing Extendida | Servicios | NIVOSTECH</title>
        <meta
          name="description"
          content="Plan 1 de NIVOSTECH: Landing Extendida (5 páginas) ideal para negocios que buscan presencia profesional. Incluye diseño, frontend, optimización, WhatsApp, Google Maps y soporte inicial."
        />
        <link
          rel="canonical"
          href="https://www.nivostech.com/servicios/plan-1"
        />
      </Helmet>

      <div className="page">
        <section className="page-section">
          <div className="page-header">
            <h1 className="page-title">
              Plan 1: Landing Extendida (Frontend 5 páginas)
            </h1>
            <p className="page-subtitle">
              Ideal para negocios que solo necesitan presencia profesional.
            </p>
          </div>

          <div className="page-content">
            <div className="content-card">
              <h2>¿Qué incluye?</h2>
              <ul className="feature-list">
                <li>
                  <strong>Diseño completo de 5 páginas:</strong>
                  <ul style={{ marginTop: "0.5rem", marginLeft: "1.5rem" }}>
                    <li>Home</li>
                    <li>Nosotros</li>
                    <li>Contacto</li>
                    <li>Blog estático (sin base de datos)</li>
                    <li>Galería</li>
                  </ul>
                </li>
                <li>Desarrollo 100% frontend</li>
                <li>Sitio rápido, responsivo y optimizado</li>
                <li>Animaciones ligeras para mejorar la experiencia</li>
                <li>
                  <strong>Integración de:</strong>
                  <ul style={{ marginTop: "0.5rem", marginLeft: "1.5rem" }}>
                    <li>WhatsApp</li>
                    <li>Google Maps</li>
                    <li>Enlaces de correo</li>
                    <li>Redes sociales</li>
                  </ul>
                </li>
                <li>Carga inicial de contenido proporcionado por el cliente</li>
                <li>Optimización visual y de estructura</li>
                <li>Publicación en dominio propio del cliente</li>
                <li>Soporte técnico inicial (7–14 días)</li>
              </ul>
            </div>

            <div className="content-card">
              <h2>No incluye:</h2>
              <ul className="feature-list">
                <li>Panel administrativo</li>
                <li>Base de datos</li>
                <li>Gestión de usuarios</li>
                <li>Blog editable</li>
                <li>Dashboard</li>
                <li>Almacenamiento propio de información</li>
              </ul>
            </div>

            <div className="content-card">
              <h2>Precios</h2>
              <div style={{ marginBottom: "1rem" }}>
                <p>
                  <strong>Precio de lista:</strong>{" "}
                  <span style={{ fontSize: "1.5rem", color: "#4A90E2" }}>
                    $11,700
                  </span>
                </p>
                <p>
                  <strong>Descuento 30%:</strong>
                </p>
                <p
                  style={{
                    fontSize: "2rem",
                    color: "#4A90E2",
                    fontWeight: "bold",
                    margin: "0.5rem 0",
                  }}
                >
                  $9,000
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginTop: "1.5rem",
                }}
              >
                <div
                  style={{
                    border: "1px solid #4A90E2",
                    padding: "1rem",
                    borderRadius: "8px",
                  }}
                >
                  <h3 style={{ marginTop: 0 }}>PAGO 1</h3>
                  <p>Anticipo del 50%</p>
                  <p
                    style={{
                      fontSize: "1.5rem",
                      color: "#4A90E2",
                      fontWeight: "bold",
                    }}
                  >
                    $4,500
                  </p>
                </div>

                <div
                  style={{
                    border: "1px solid #4A90E2",
                    padding: "1rem",
                    borderRadius: "8px",
                  }}
                >
                  <h3 style={{ marginTop: 0 }}>PAGO 2</h3>
                  <p>Liquidación del 50%</p>
                  <p
                    style={{
                      fontSize: "1.5rem",
                      color: "#4A90E2",
                      fontWeight: "bold",
                    }}
                  >
                    $4,500
                  </p>
                </div>
              </div>
            </div>

            <div className="content-card">
              <h2>Plan de Acción</h2>
              <ul className="feature-list">
                <li>Pago en transferencia</li>
                <li>
                  Para comenzar se necesita INE y constancia de situación fiscal
                  (en caso de requerir factura)
                </li>
                <li>Tiempo de entrega: 3-4 semanas</li>
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
    </>
  );
}

export default Plan1;
