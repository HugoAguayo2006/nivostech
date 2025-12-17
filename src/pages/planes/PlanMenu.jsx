import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import WhatsAppFloat from "../../WhatsAppFloat";
import "./PlanPage.css";

const WHATSAPP_LINK =
  "https://wa.me/523310392675?text=Hola%20NIVOSTECH%2C%20me%20interesa%20el%20Plan%20Men%C3%BA.%20%C2%BFC%C3%B3mo%20empezamos%3F";

function PlanMenu() {
  return (
    <>
      {/* ================= SEO (PLAN MENÚ) ================= */}
      <Helmet>
        <title>Plan Menú | Servicios | NIVOSTECH</title>
        <meta
          name="description"
          content="Plan Menú de NIVOSTECH: Solución completa para restaurantes y negocios gastronómicos. Incluye página web con menú digital interactivo, gestión de pedidos y más."
        />
        <link rel="canonical" href="https://www.nivostech.com/servicios/plan-menu" />
      </Helmet>

      <div className="page">
        <section className="plan">
          {/* ====== HERO ====== */}
          <header className="plan-hero">
            <div className="plan-hero__bg" aria-hidden="true" />
            <div className="plan-hero__inner">
              <div className="plan-hero__left">
                <div className="plan-badges">
                  <span className="badge badge--glow">Especializado</span>
                  <span className="badge">Restaurantes</span>
                  <span className="badge">Menú Digital</span>
                </div>

                <h1 className="plan-title">Plan Menú</h1>
                <p className="plan-subtitle">
                  Ideal para restaurantes y negocios gastronómicos que necesitan un menú digital
                  interactivo, gestión de pedidos y presencia profesional online.
                </p>

                <div className="plan-kpis">
                  <div className="kpi">
                    <span className="kpi-label">Entrega</span>
                    <span className="kpi-value">3–4 semanas</span>
                  </div>
                  <div className="kpi">
                    <span className="kpi-label">Incluye</span>
                    <span className="kpi-value">Menú Digital</span>
                  </div>
                  <div className="kpi">
                    <span className="kpi-label">Optimización</span>
                    <span className="kpi-value">Responsive + velocidad</span>
                  </div>
                </div>

                <div className="plan-cta">
                  <a className="btn btn--primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                    Cotizar por WhatsApp
                  </a>
                  <Link className="btn btn--ghost" to="/servicios">
                    Volver a Servicios
                  </Link>
                </div>

                <p className="plan-note">
                  * Precio con descuento por tiempo limitado. Factura disponible (requiere CSF).
                </p>
              </div>

              {/* ====== PRICE CARD ====== */}
              <aside className="price-card">
                <div className="price-card__top">
                  <h2 className="price-title">Inversión</h2>
                  <div className="price-row">
                    <span className="price-label">Lista</span>
                    <span className="price-old">$13,500</span>
                  </div>
                  <div className="price-row price-row--main">
                    <span className="price-label">Hoy</span>
                    <span className="price-main">$10,500</span>
                  </div>
                  <div className="price-chip">-30%</div>
                </div>

                <div className="price-split">
                  <div className="split-card">
                    <div className="split-title">Pago 1</div>
                    <div className="split-desc">Anticipo 50%</div>
                    <div className="split-amount">$5,250</div>
                  </div>
                  <div className="split-card">
                    <div className="split-title">Pago 2</div>
                    <div className="split-desc">Liquidación 50%</div>
                    <div className="split-amount">$5,250</div>
                  </div>
                </div>

                <div className="price-actions">
                  <a className="btn btn--primary btn--full" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
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
                  <div className="list-title">Diseño completo (5 páginas)</div>
                  <ul className="list">
                    <li>Home</li>
                    <li>Nosotros</li>
                    <li>Menú Digital Interactivo</li>
                    <li>Contacto</li>
                    <li>Galería</li>
                  </ul>
                </div>

                <ul className="checks">
                  <li>Menú digital interactivo con categorías y filtros</li>
                  <li>Desarrollo 100% frontend</li>
                  <li>Sitio rápido, responsivo y optimizado</li>
                  <li>Animaciones ligeras (sin afectar rendimiento)</li>
                  <li>Integración de WhatsApp para pedidos</li>
                  <li>Google Maps para ubicación</li>
                  <li>Integración de redes sociales</li>
                  <li>Carga inicial de contenido (platos, precios, descripciones)</li>
                  <li>Optimización visual y de estructura</li>
                  <li>Publicación en dominio propio del cliente</li>
                  <li>Soporte técnico inicial (7–14 días)</li>
                </ul>
              </section>

              <section className="card" style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
                <h2 className="card-title" style={{ justifyContent: "center" }}>
                  ¿Necesitas más funcionalidades?
                </h2>

                <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem", lineHeight: "1.6" }}>
                  Si necesitas panel administrativo para gestionar el menú, sistema de pedidos online,
                  reservas de mesas o base de datos, entonces el <strong>Sitio Profesional</strong> es ideal para ti.
                </p>

                <div style={{ marginBottom: "1rem", textAlign: "center" }}>
                  <img 
                    src="/images/nivos_planes2.webp" 
                    alt="Plan 2: Sitio Profesional"
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
                  <Link className="btn btn--primary" to="/servicios/plan-2">
                    Ver Plan Sitio Profesional
                  </Link>
                </div>
              </section>
            </div>

            {/* ====== PROCESO ====== */}
            <section className="card" style={{ marginTop: "2rem" }}>
              <h2 className="card-title">Plan de acción</h2>

              <div className="timeline">
                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">1) Inicio</div>
                    <div className="step-text">
                      Anticipo (50%) + recolección de contenido (logo, textos, fotos de platos, precios, descripciones, links).
                    </div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">2) Diseño + estructura</div>
                    <div className="step-text">
                      Definimos secciones, estilo visual, navegación y estructura del menú digital para que sea claro y atractivo.
                    </div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">3) Desarrollo</div>
                    <div className="step-text">
                      Construimos el frontend, menú interactivo, responsive, optimización y ajustes finos.
                    </div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">4) Publicación</div>
                    <div className="step-text">
                      Montaje en tu dominio y pruebas finales. Liquidación (50%).
                    </div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">5) Soporte</div>
                    <div className="step-text">
                      Soporte inicial 7–14 días para asegurar que todo quede perfecto.
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
                  <li>Información del menú (platos, precios, descripciones, fotos)</li>
                </ul>
              </div>
            </section>

            {/* ====== CTA FINAL ====== */}
            <section className="cta-final">
              <div className="cta-final__card">
                <h3>¿Listo para digitalizar tu menú?</h3>
                <p>
                  Te damos un sitio premium con menú digital interactivo para que tus clientes conozcan tus platos y te contacten fácilmente.
                </p>
                <div className="cta-final__actions" style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <a className="btn btn--primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
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

export default PlanMenu;

