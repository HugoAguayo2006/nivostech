import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import WhatsAppFloat from "../../WhatsAppFloat";
import "./PlanPage.css";

const WHATSAPP_LINK =
  "https://wa.me/523310392675?text=Hola%20NIVOSTECH%2C%20me%20interesa%20el%20Plan%203%20(Sitio%20%2B%20Redes%20Sociales).%20Quiero%20informaci%C3%B3n%20del%20paquete%20mensual%20de%20%242%2C500%20por%2010%20meses.";

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
        <link rel="canonical" href="https://www.nivostech.com/servicios/plan-3" />
      </Helmet>

      <div className="page">
        <section className="plan">
          {/* ====== HERO ====== */}
          <header className="plan-hero">
            <div className="plan-hero__bg" aria-hidden="true" />
            <div className="plan-hero__inner">
              <div className="plan-hero__left">
                <div className="plan-badges">
                  <span className="badge badge--glow">Paquete completo</span>
                  <span className="badge">Web + Redes</span>
                  <span className="badge">Mensual</span>
                </div>

                <h1 className="plan-title">Plan 3: Sitio + Redes Sociales</h1>
                <p className="plan-subtitle">
                  Presencia digital completa: manejamos tus redes mes a mes y además
                  tu página web va incluida <strong>GRATIS</strong> dentro del paquete.
                </p>

                <div className="plan-kpis">
                  <div className="kpi">
                    <span className="kpi-label">Pago mensual</span>
                    <span className="kpi-value">$2,500 MXN</span>
                  </div>
                  <div className="kpi">
                    <span className="kpi-label">Contrato</span>
                    <span className="kpi-value">10 meses</span>
                  </div>
                  <div className="kpi">
                    <span className="kpi-label">Bonus</span>
                    <span className="kpi-value">Web incluida</span>
                  </div>
                </div>

                <div className="plan-cta">
                  <a
                    className="btn btn--primary"
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Contratar por WhatsApp
                  </a>
                  <Link className="btn btn--ghost" to="/servicios">
                    Volver a Servicios
                  </Link>
                </div>

                <p className="plan-note">
                  * Ideal si quieres que tu marca crezca con constancia y contenido profesional,
                  mientras tu web trabaja como “centro” de tu presencia digital.
                </p>
              </div>

              {/* ====== PRICE CARD ====== */}
              <aside className="price-card">
                <div className="price-card__top">
                  <h2 className="price-title">Inversión</h2>

                  <div className="price-row price-row--main">
                    <span className="price-label">Mensual</span>
                    <span className="price-main">$2,500</span>
                  </div>

                  <div className="price-row">
                    <span className="price-label">Duración</span>
                    <span style={{ fontWeight: 800 }}>10 meses</span>
                  </div>

                  <div className="price-row">
                    <span className="price-label">Total</span>
                    <span style={{ fontWeight: 900 }}>$25,000</span>
                  </div>

                  <div className="price-chip">WEB GRATIS</div>
                </div>

                <div className="price-split">
                  <div className="split-card">
                    <div className="split-title">Incluye</div>
                    <div className="split-desc">Gestión mensual</div>
                    <div className="split-amount">10 meses</div>
                  </div>
                  <div className="split-card">
                    <div className="split-title">Bonus</div>
                    <div className="split-desc">Web tipo Plan Landing Extendida</div>
                    <div className="split-amount">GRATIS</div>
                  </div>
                </div>

                <div className="price-actions">
                  <a
                    className="btn btn--primary btn--full"
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Quiero este plan
                  </a>
                  <a className="btn btn--soft btn--full" href="#incluye">
                    Ver qué incluye
                  </a>
                </div>

                <div className="price-foot">
                  <div className="mini">
                    <span className="mini-dot" />
                    Transferencia mensual
                  </div>
                  <div className="mini">
                    <span className="mini-dot" />
                    Reportes mensuales
                  </div>
                  <div className="mini">
                    <span className="mini-dot" />
                    Dominio del cliente
                  </div>
                </div>
              </aside>
            </div>
          </header>

          {/* ====== CONTENT ====== */}
          <div className="plan-wrap">
            {/* ====== INCLUYE / NO INCLUYE ====== */}
            <div className="grid-2" id="incluye">
              <section className="card">
                <h2 className="card-title" style={{ justifyContent: "center" }}>
                  <span className="icon icon--ok" aria-hidden="true">✓</span>
                  ¿Qué incluye?
                </h2>

                <div className="list-block">
                  <div className="list-title">BONUS: Página web incluida GRATIS</div>
                  <ul className="list">
                    <li>Landing Extendida tipo Plan 1, extendible a Plan 2</li>
                    <li>Integración de WhatsApp, Google Maps, correo y redes</li>
                    <li>Soporte inicial (7–14 días)</li>
                    <li>Entrega estimada: 5–6 semanas</li>
                  </ul>
                </div>

                <div className="list-block" style={{ marginTop: "0.9rem" }}>
                  <div className="list-title">Gestión profesional de redes sociales</div>
                  <ul className="list">
                    <li>Creación de contenido (posts, imágenes, videos)</li>
                    <li>Publicación y programación</li>
                    <li>Gestión multi-plataforma (FaceBook, Instagram, etc.)</li>
                    <li>Respuesta a comentarios y mensajes</li>
                    <li>Análisis de métricas + reportes mensuales</li>
                    <li>Estrategia de crecimiento y engagement</li>
                    <li>Optimización de perfiles y biografías</li>
                  </ul>
                </div>
              </section>

              <section className="card" style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
                <h2 className="card-title" style={{ justifyContent: "center" }}>
                  ¿Necesitas campañas pagadas?
                </h2>

                <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem", lineHeight: "1.6", textAlign: "center" }}>
                  Si requieres campañas pagadas o publicidad pagada (Meta Ads, Google Ads, etc.), 
                  contáctanos para una cotización personalizada.
                </p>

                <div style={{ marginBottom: "1rem", textAlign: "center" }}>
                  <img 
                    src="/images/redes_sociales_tecnologico.webp" 
                    alt="Campañas pagadas y publicidad"
                    style={{ 
                      maxWidth: "100%", 
                      height: "auto", 
                      borderRadius: "12px",
                      display: "block",
                      margin: "0 auto"
                    }}
                  />
                </div>

                <div style={{ textAlign: "center", marginTop: "auto", paddingTop: "1.5rem" }}>
                  <a className="btn btn--primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                    Contactar por WhatsApp
                  </a>
                </div>
              </section>
            </div>

            {/* ====== VENTAJAS ====== */}
            <section className="card" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              <h2 className="card-title">Ventajas del plan</h2>
              <ul className="checks">
                <li>Página web profesional incluida sin costo adicional</li>
                <li>Presencia digital completa (web + redes)</li>
                <li>Contenido constante y coherente en todas tus plataformas</li>
                <li>Ahorro de tiempo: nosotros nos encargamos</li>
                <li>Crecimiento progresivo de tu marca</li>
                <li>Reportes mensuales para ver avances reales</li>
              </ul>
            </section>

            {/* ====== BONUS DESTACADO (look premium usando el mismo estilo) ====== */}
            <section className="card" style={{ marginBottom: "2rem" }}>
              <h2 style={{
                fontSize: "1.9rem",
                marginBottom: "1.2rem",
                color: "#00f0ff",
                fontFamily: "'Zen Dots', cursive",
                fontWeight: 400,
                textShadow: "0 0 30px rgba(0, 240, 255, 0.5), 0 0 15px rgba(0, 240, 255, 0.4)",
                letterSpacing: "0.5px",
                textAlign: "center"
              }}>
                BONUS incluido
              </h2>
              <div className="hint" style={{ marginTop: 0 }}>
                <strong>Tu página web va GRATIS</strong>. Inicialmente tiene costo,
                pero al contratar el manejo de redes, se incluye dentro del paquete.
              </div>
            </section>

            {/* ====== PROCESO ====== */}
            <section className="card">
              <h2 className="card-title">Plan de acción</h2>

              <div className="timeline">
                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">1) Inicio (Mes 1)</div>
                    <div className="step-text">
                      Pago mensual + acceso a cuentas + levantamiento de información (estilo, objetivos, público).
                    </div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">2) Web (primeras 5–6 semanas)</div>
                    <div className="step-text">
                      Diseñamos y entregamos tu web (tipo Plan Landing Extendida) mientras iniciamos el calendario de redes.
                    </div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">3) Redes (mes a mes)</div>
                    <div className="step-text">
                      Creación + programación + interacción + optimización continua.
                    </div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">4) Reporte mensual</div>
                    <div className="step-text">
                      Te entregamos métricas y recomendaciones para el siguiente mes.
                    </div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">5) Optimización constante</div>
                    <div className="step-text">
                      Ajustamos estrategia según resultados (crecimiento, engagement, clics y mensajes).
                    </div>
                  </div>
                </div>
              </div>

              <div className="reqs">
                <div className="reqs-title">Para comenzar se necesita:</div>
                <ul className="reqs-list">
                  <li>Pago mensual de $2,500 por transferencia</li>
                  <li>INE</li>
                  <li>Constancia de situación fiscal (si requieres factura)</li>
                  <li>Acceso a cuentas de redes sociales</li>
                </ul>
              </div>
            </section>

            {/* ====== CTA FINAL ====== */}
            <section className="cta-final">
              <div className="cta-final__card">
                <h3>¿Quieres que tu marca crezca mientras tu web convierte?</h3>
                <p>
                  Este plan te da constancia en redes + un sitio profesional incluido para cerrar ventas.
                </p>
                <div className="cta-final__actions" style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <a
                    className="btn btn--primary"
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Agendar por WhatsApp
                  </a>
                  <Link className="btn btn--ghost" to="/servicios">
                    Ver otros planes
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </section>

        <WhatsAppFloat />

        <footer className="footer">
          <p>© {new Date().getFullYear()} NIVO · Diseño y desarrollo de páginas web.</p>
        </footer>
      </div>
    </>
  );
}

export default Plan3;
