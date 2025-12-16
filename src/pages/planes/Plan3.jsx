import { Helmet } from "react-helmet-async";
import WhatsAppFloat from "../../WhatsAppFloat";

function Plan3() {
  return (
    <>
      {/* ================= SEO (PLAN 3) ================= */}
      <Helmet>
        <title>Plan 3: Sitio + Redes Sociales | Servicios | NIVOSTECH</title>
        <meta
          name="description"
          content="Plan 3 de NIVOSTECH: Servicio completo de manejo de redes sociales + página web gratis. Incluye gestión de contenido, publicación, análisis y estrategia de crecimiento. Pago mensual de $2,500 por 10 meses."
        />
        <link
          rel="canonical"
          href="https://www.nivostech.com/servicios/plan-3"
        />
      </Helmet>

      <div className="page">
        <section className="page-section">
          <div className="page-header">
            <h1 className="page-title">
              Plan 3: Sitio + Redes Sociales
            </h1>
            <p className="page-subtitle">
              Servicio completo de manejo de redes sociales + tu página web gratis incluida.
            </p>
          </div>

          <div className="page-content">
            <div className="content-card">
              <h2>¿Qué incluye?</h2>
              <p style={{ marginBottom: "1rem" }}>
                <strong>
                  Todo lo del Plan 1 (Landing Extendida) + gestión profesional de redes sociales:
                </strong>
              </p>

              <ul className="feature-list">
                <li>
                  <strong>Página web gratis incluida:</strong>
                  <ul style={{ marginTop: "0.5rem", marginLeft: "1.5rem" }}>
                    <li>Diseño completo de 5 páginas (Home, Nosotros, Contacto, Blog estático, Galería)</li>
                    <li>Desarrollo 100% frontend</li>
                    <li>Sitio rápido, responsivo y optimizado</li>
                    <li>Integración de WhatsApp, Google Maps, correo y redes sociales</li>
                    <li>Soporte técnico inicial (7–14 días)</li>
                  </ul>
                </li>

                <li>
                  <strong>Gestión de redes sociales:</strong>
                  <ul style={{ marginTop: "0.5rem", marginLeft: "1.5rem" }}>
                    <li>Creación de contenido para redes sociales (posts, imágenes, videos)</li>
                    <li>Publicación y programación de contenido</li>
                    <li>Gestión de múltiples plataformas (Facebook, Instagram, LinkedIn, etc.)</li>
                    <li>Respuesta a comentarios y mensajes</li>
                    <li>Análisis de métricas y reportes mensuales</li>
                    <li>Estrategia de crecimiento y engagement</li>
                    <li>Optimización de perfiles y biografías</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="content-card">
              <h2>Ventajas del plan:</h2>
              <ul className="feature-list">
                <li>Página web profesional incluida sin costo adicional</li>
                <li>Presencia digital completa (web + redes sociales)</li>
                <li>Contenido profesional y consistente en todas tus plataformas</li>
                <li>Ahorro de tiempo: nosotros nos encargamos de todo</li>
                <li>Crecimiento constante de tu marca en redes sociales</li>
                <li>Reportes mensuales para ver tu progreso</li>
              </ul>
            </div>

            <div className="content-card">
              <h2>Precios</h2>
              <div style={{ marginBottom: "1rem" }}>
                <p>
                  <strong>Pago mensual:</strong>
                </p>
                <p
                  style={{
                    fontSize: "2rem",
                    color: "#00d4ff",
                    fontWeight: "bold",
                    margin: "0.5rem 0",
                  }}
                >
                  $2,500 MXN/mes
                </p>
                <p>
                  <strong>Duración del contrato:</strong> 10 meses
                </p>
                <p>
                  <strong>Total del servicio:</strong>{" "}
                  <span style={{ fontSize: "1.5rem", color: "#00d4ff" }}>
                    $25,000 MXN
                  </span>
                </p>
              </div>

              <div style={{ marginTop: "1.5rem", padding: "1rem", backgroundColor: "rgba(0, 212, 255, 0.1)", borderRadius: "8px", border: "1px solid rgba(0, 212, 255, 0.3)" }}>
                <h3 style={{ marginTop: 0, color: "#00d4ff" }}>🎁 BONUS:</h3>
                <p style={{ marginBottom: 0 }}>
                  <strong>Tu página web está incluida GRATIS</strong> - Normalmente tiene un valor de $9,000, 
                  pero al contratar el servicio de redes sociales, la página web es parte del paquete.
                </p>
              </div>
            </div>

            <div className="content-card">
              <h2>Plan de Acción</h2>
              <ul className="feature-list">
                <li>Pago mensual de $2,500 por transferencia</li>
                <li>
                  Para comenzar se necesita INE y constancia de situación fiscal
                  (en caso de requerir factura)
                </li>
                <li>Acceso a las cuentas de redes sociales del cliente</li>
                <li>Entrega de página web en 3-4 semanas</li>
                <li>Inicio de gestión de redes sociales desde el primer mes</li>
                <li>Reportes mensuales de resultados y métricas</li>
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

export default Plan3;

