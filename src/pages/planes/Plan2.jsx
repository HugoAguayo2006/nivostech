import { Helmet } from "react-helmet-async";
import WhatsAppFloat from "../../WhatsAppFloat";

function Plan2() {
  return (
    <>
      {/* ================= SEO (PLAN 2) ================= */}
      <Helmet>
        <title>Plan 2: Sitio Profesional | Servicios | NIVOSTECH</title>
        <meta
          name="description"
          content="Plan 2 de NIVOSTECH: Sitio Profesional con frontend + backend + base de datos. Incluye API personalizada, panel/dashbord, blog administrable, autenticación y escalabilidad."
        />
        <link
          rel="canonical"
          href="https://www.nivostech.com/servicios/plan-2"
        />
      </Helmet>

      <div className="page">
        <section className="page-section">
          <div className="page-header">
            <h1 className="page-title">
              Plan 2: Sitio Profesional (Frontend + Backend + Base de Datos)
            </h1>
            <p className="page-subtitle">
              Ideal para negocios que necesitan un sistema más completo.
            </p>
          </div>

          <div className="page-content">
            <div className="content-card">
              <h2>¿Qué incluye?</h2>
              <p style={{ marginBottom: "1rem" }}>
                <strong>
                  Todo lo del plan frontend + funcionalidades avanzadas:
                </strong>
              </p>

              <ul className="feature-list">
                <li>
                  <strong>Backend y base de datos:</strong>
                  <ul style={{ marginTop: "0.5rem", marginLeft: "1.5rem" }}>
                    <li>API personalizada</li>
                    <li>
                      Base de datos (PostgreSQL / MySQL / MongoDB según necesidad)
                    </li>
                    <li>Panel administrativo o dashboard (según acuerdo)</li>
                    <li>Blog totalmente administrable</li>
                    <li>Gestión de productos, servicios, usuarios o contenido</li>
                    <li>Endpoints protegidos con autenticación (JWT o similar)</li>
                  </ul>
                </li>

                <li>
                  <strong>Integraciones:</strong>
                  <ul style={{ marginTop: "0.5rem", marginLeft: "1.5rem" }}>
                    <li>WhatsApp</li>
                    <li>Google Maps</li>
                    <li>Correo SMTP (para formularios reales)</li>
                    <li>Formularios conectados a base de datos</li>
                    <li>
                      Envío de mensajes automáticos o notificaciones (si aplica)
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="content-card">
              <h2>Ventajas del plan:</h2>
              <ul className="feature-list">
                <li>Contenido editable por el cliente</li>
                <li>Escalabilidad para futuras funciones</li>
                <li>Seguridad y panel privado</li>
                <li>Mantenimiento más sólido y profesional</li>
              </ul>
            </div>

            <div className="content-card">
              <h2>Precios</h2>
              <div style={{ marginBottom: "1rem" }}>
                <p>
                  <strong>Precio de lista:</strong>{" "}
                  <span style={{ fontSize: "1.5rem", color: "#4A90E2" }}>
                    $18,200
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
                  $14,000
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
                    $7,000
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
                    $7,000
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

export default Plan2;
