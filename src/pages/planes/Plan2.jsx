import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import WhatsAppFloat from "../../WhatsAppFloat";
import "./PlanPage.css";

const WHATSAPP_LINK =
  "https://wa.me/523310392675?text=Hola%20NIVOSTECH%2C%20me%20interesa%20el%20Plan%202%20(Sitio%20Profesional%20con%20backend%20y%20base%20de%20datos).%20%C2%BFC%C3%B3mo%20empezamos%3F";

function Plan2() {
  return (
    <>
      {/* ================= SEO (PLAN 2) ================= */}
      <Helmet>
        <title>Plan 2: Sitio Profesional | Servicios | NIVOSTECH</title>
        <meta
          name="description"
          content="Plan 2 de NIVOSTECH: Sitio Profesional con frontend + backend + base de datos. Incluye API personalizada, panel/dashboard, blog administrable, autenticación y escalabilidad."
        />
        <link rel="canonical" href="https://www.nivostech.com/servicios/plan-2" />
      </Helmet>

      <div className="page">
        <section className="plan">
          {/* ====== HERO ====== */}
          <header className="plan-hero">
            <div className="plan-hero__bg" aria-hidden="true" />
            <div className="plan-hero__inner">
              <div className="plan-hero__left">
                <div className="plan-badges">
                  <span className="badge badge--glow">Profesional</span>
                  <span className="badge">Frontend + Backend</span>
                  <span className="badge">Base de datos</span>
                </div>

                <h1 className="plan-title">Plan 2: Sitio Profesional</h1>
                <p className="plan-subtitle">
                  Ideal si necesitas un sistema completo: administración, contenido editable,
                  blog real, formularios conectados y escalabilidad.
                </p>

                <div className="plan-kpis">
                  <div className="kpi">
                    <span className="kpi-label">Entrega</span>
                    <span className="kpi-value">3–4 semanas</span>
                  </div>
                  <div className="kpi">
                    <span className="kpi-label">Incluye</span>
                    <span className="kpi-value">Panel / Dashboard</span>
                  </div>
                  <div className="kpi">
                    <span className="kpi-label">Seguridad</span>
                    <span className="kpi-value">Auth + endpoints</span>
                  </div>
                </div>

                <div className="plan-cta">
                  <a
                    className="btn btn--primary"
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cotizar por WhatsApp
                  </a>
                  <Link className="btn btn--ghost" to="/servicios">
                    Volver a Servicios
                  </Link>
                </div>

                <p className="plan-note">
                  * Este plan es para proyectos que requieren guardar/administrar información y crecer a futuro.
                </p>
              </div>

              {/* ====== PRICE CARD ====== */}
              <aside className="price-card">
                <div className="price-card__top">
                  <h2 className="price-title">Inversión</h2>
                  <div className="price-row price-row--main">
                    <span className="price-label">Precio</span>
                    <span className="price-main">$15,000</span>
                  </div>
                </div>

                <div className="price-split">
                  <div className="split-card">
                    <div className="split-title">Pago 1</div>
                    <div className="split-desc">Anticipo 50%</div>
                    <div className="split-amount">$7,500</div>
                  </div>

                  <div className="split-card">
                    <div className="split-title">Pago 2</div>
                    <div className="split-desc">Liquidación 50%</div>
                    <div className="split-amount">$7,500</div>
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
                    Transferencia bancaria
                  </div>
                  <div className="mini">
                    <span className="mini-dot" />
                    Escalable a futuro
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
                  <span className="icon icon--ok" aria-hidden="true">
                    ✓
                  </span>
                  ¿Qué incluye?
                </h2>

                <div className="list-block">
                  <div className="list-title">
                    Todo lo del plan frontend + funciones avanzadas
                  </div>
                  <ul className="list">
                    <li>Experiencia premium (diseño, responsive y optimización)</li>
                    <li>Integraciones (WhatsApp, Maps, correo, redes)</li>
                    <li>Estructura clara orientada a conversión</li>
                  </ul>
                </div>

                <ul className="checks">
                  <li>API personalizada para tu proyecto</li>
                  <li>Base de datos (PostgreSQL / MySQL / MongoDB según necesidad)</li>
                  <li>Panel administrativo o dashboard (según acuerdo)</li>
                  <li>Blog totalmente administrable</li>
                  <li>Gestión de productos, servicios, usuarios o contenido</li>
                  <li>Endpoints protegidos con autenticación (JWT o similar)</li>
                  <li>Formularios reales (SMTP) y/o guardados en base de datos</li>
                  <li>Notificaciones / automatizaciones (si aplica)</li>
                </ul>
              </section>

              <section className="card" style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
                <h2 className="card-title" style={{ justifyContent: "center" }}>
                  ¿Necesitas más funcionalidades?
                </h2>

                <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem", lineHeight: "1.6" }}>
                  Si necesitas manejo de redes sociales y tener presencia digital entonces el plan <strong>Sitio + Redes Sociales</strong> o una cotización personalizada es ideal para ti.
                </p>

                <div style={{ marginBottom: "1rem", textAlign: "center" }}>
                  <img 
                    src="/images/nivos_planes4.webp" 
                    alt="Plan 3: Sitio + Redes Sociales"
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
                  <Link className="btn btn--primary" to="/servicios/plan-3">
                    Ver Plan Sitio + Redes Sociales
                  </Link>
                </div>
              </section>
            </div>

            {/* ====== VENTAJAS ====== */}
            <section className="card" style={{ marginTop: "2rem" }}>
              <h2 className="card-title">Ventajas del plan</h2>

              <ul className="checks">
                <li>Contenido editable por el cliente (sin depender de nosotros)</li>
                <li>Escalabilidad para futuras funciones y módulos</li>
                <li>Seguridad y panel privado</li>
                <li>Mantenimiento más sólido y profesional</li>
              </ul>
            </section>

            {/* ====== PROCESO ====== */}
            <section className="card" style={{ marginTop: "2rem" }}>
              <h2 className="card-title">Plan de acción</h2>

              <div className="timeline">
                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">1) Inicio</div>
                    <div className="step-text">
                      Anticipo (50%) + definición de módulos (qué se administra y qué se guarda).
                    </div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">2) Arquitectura</div>
                    <div className="step-text">
                      Modelamos base de datos, endpoints, roles y reglas de seguridad.
                    </div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">3) Desarrollo</div>
                    <div className="step-text">
                      Frontend + backend + panel/admin + conexión a BD.
                    </div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">4) Pruebas</div>
                    <div className="step-text">
                      Pruebas de flujo, seguridad, formularios, carga y validaciones.
                    </div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">5) Publicación</div>
                    <div className="step-text">
                      Deploy y ajustes finales. Liquidación (50%).
                    </div>
                  </div>
                </div>
              </div>

              <div className="reqs">
                <div className="reqs-title">Para comenzar se necesita:</div>
                <ul className="reqs-list">
                  <li>Pago en transferencia</li>
                  <li>INE</li>
                  <li>Constancia de situación fiscal (si requieres factura)</li>
                </ul>
              </div>
            </section>

            {/* ====== CTA FINAL ====== */}
            <section className="cta-final">
              <div className="cta-final__card">
                <h3>¿Quieres un sistema que puedas administrar?</h3>
                <p>
                  Este plan es ideal si vas a manejar contenido, usuarios, productos o información real con seguridad.
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

export default Plan2;
