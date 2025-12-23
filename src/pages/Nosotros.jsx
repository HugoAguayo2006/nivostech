import { Helmet } from "react-helmet-async";
import WhatsAppFloat from "../WhatsAppFloat";
import "./Nosotros.css";
import { Link } from "react-router-dom";

export default function Nosotros() {
  const siteUrl = "https://www.nivostech.com";
  const pageUrl = `${siteUrl}/nosotros`;

  return (
    <>
      <Helmet>
        <title>Nosotros | NIVOSTECH</title>
        <meta
          name="description"
          content="NIVOSTECH es un estudio digital en Guadalajara. Diseñamos y desarrollamos páginas web modernas con enfoque en claridad, velocidad y resultados."
        />
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      <main className="about-page">
        {/* ================= HERO ================= */}
        <header className="about-hero2">
          <div className="about-hero2-inner">

            <h1 className="about-h1">
              Hacemos webs que se ven bien,
              <span className="about-h1-accent"> venden</span> y se mantienen
              fáciles.
            </h1>

            <p className="about-lead">
              NIVOSTECH diseña y desarrolla experiencias digitales claras, rápidas
              y alineadas a objetivos reales: más confianza, más contactos, más
              negocio.
            </p>

            <div className="about-hero2-actions">
              <Link to="/contacto" className="about-btn about-btn-primary">
              Cotizar mi página
            </Link>
             <Link to="/servicios" className="about-btn about-btn-primary">
              Ver Servicios
            </Link>
            </div>

            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-kpi">+Rápido</div>
                <div className="about-stat-label">Optimizado para rendimiento</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-kpi">+Claro</div>
                <div className="about-stat-label">Mensaje directo y estructura</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-kpi">+Seguro</div>
                <div className="about-stat-label">Buenas prácticas y estabilidad</div>
              </div>
            </div>
          </div>

          {/* decor */}
          <div className="about-glow about-glow-a" aria-hidden="true" />
          <div className="about-glow about-glow-b" aria-hidden="true" />
        </header>

        {/* ================= STORY / ENFOQUE ================= */}
        <section className="about-section2">
          <div className="about-grid2">
            <div className="about-panel about-panel-story">
              <h2 className="about-h2">Nuestra forma de trabajar</h2>
              <p className="about-text">
                No hacemos “páginas bonitas” y ya. Armamos una presencia digital
                con intención: qué quieres que haga el usuario, qué te diferencia
                y cómo lo comunicamos en segundos.
              </p>
              <p className="about-text">
                Somos cercanos, claros y rápidos. Te guiamos sin términos
                técnicos y con entregables concretos.
              </p>

              <div className="about-pill-row">
                <span className="about-pill">Diseño con intención</span>
                <span className="about-pill">Velocidad y SEO</span>
                <span className="about-pill">Contenido claro</span>
                <span className="about-pill">Soporte real</span>
              </div>
            </div>

            <div className="about-panel about-panel-why">
              <h3 className="about-h3">Lo que cuidamos sí o sí</h3>

              <ul className="about-checklist">
                <li>
                  <span className="about-check">✓</span>
                  Estructura que guía al cliente a contactarte.
                </li>
                <li>
                  <span className="about-check">✓</span>
                  Diseño moderno, legible y adaptable a móvil.
                </li>
                <li>
                  <span className="about-check">✓</span>
                  Carga rápida y buenas prácticas técnicas.
                </li>
                <li>
                  <span className="about-check">✓</span>
                  Mensaje y secciones alineadas a tu negocio.
                </li>
              </ul>

              <div className="about-mini-cta">
                <p className="about-mini-cta-text">
                  ¿Quieres que tu web te genere clientes sin “estarla explicando”?
                </p>
                <Link to="/contacto" className="about-btn about-btn-primary">
                Hablemos →
              </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROCESO ================= 
        <section className="about-section2">
          <div className="about-process">
            <div className="about-process-head">
              <h2 className="about-h2">Proceso simple, resultados claros</h2>
              <p className="about-sub">
                4 pasos. Sin vueltas. Sin “te avisamos”. Con entregas visibles.
              </p>
            </div>

            <div className="about-steps">
              <article className="about-step">
                <div className="about-step-n">01</div>
                <h3 className="about-h3">Diagnóstico</h3>
                <p className="about-text">
                  Definimos objetivo, público, secciones y estilo. Aterrizamos lo
                  importante primero.
                </p>
              </article>

              <article className="about-step">
                <div className="about-step-n">02</div>
                <h3 className="about-h3">Diseño</h3>
                <p className="about-text">
                  Proponemos una estructura clara y un look moderno alineado a tu
                  marca.
                </p>
              </article>

              <article className="about-step">
                <div className="about-step-n">03</div>
                <h3 className="about-h3">Desarrollo</h3>
                <p className="about-text">
                  Construimos rápido, estable y responsive. Optimización incluida.
                </p>
              </article>

              <article className="about-step">
                <div className="about-step-n">04</div>
                <h3 className="about-h3">Lanzamiento</h3>
                <p className="about-text">
                  Publicamos, revisamos detalles finales y te dejamos todo listo
                  para operar.
                </p>
              </article>
            </div>
          </div>
        </section>*/}

        {/* ================= VALORES + MISIÓN/VISIÓN COMPACTO ================= */}
        <section className="about-section2">
          <div className="about-duo">
            <div className="about-panel">
              <h2 className="about-h2">Misión</h2>
              <p className="about-text">
                Crear soluciones web claras y funcionales que ayuden a negocios y
                proyectos a ganar visibilidad, confianza y clientes.
              </p>
            </div>

            <div className="about-panel">
              <h2 className="about-h2">Visión</h2>
              <p className="about-text">
                Ser un referente local en soluciones digitales, demostrando que
                una web bien hecha puede ser simple, útil y profesional.
              </p>
            </div>
          </div>

          <div className="about-panel about-values2">
            <h2 className="about-h2">Valores</h2>

            <div className="about-values-grid">
              <div className="about-value">
                <div className="about-value-title">Simplicidad</div>
                <div className="about-value-desc">Lo claro vende mejor.</div>
              </div>

              <div className="about-value">
                <div className="about-value-title">Transparencia</div>
                <div className="about-value-desc">Sin letras chiquitas.</div>
              </div>

              <div className="about-value">
                <div className="about-value-title">Cercanía</div>
                <div className="about-value-desc">Trato humano y directo.</div>
              </div>

              <div className="about-value">
                <div className="about-value-title">Calidad</div>
                <div className="about-value-desc">Detalles que se notan.</div>
              </div>

              <div className="about-value">
                <div className="about-value-title">Compromiso</div>
                <div className="about-value-desc">Nos metemos de verdad.</div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA FINAL ================= */}
        <section className="about-cta">
          <div className="about-cta-inner">
            <h2 className="about-cta-title">Listo para una web que sí te represente</h2>
            <p className="about-cta-text">
              Cuéntanos qué haces y te decimos la mejor ruta para tu página.
            </p>
            <div className="about-hero2-actions">

              <Link to="/contacto" className="about-btn about-btn-primary">
                Hablemos →
              </Link>
              <Link to="/servicios" className="about-btn about-btn-primary">
                 Ver planes
              </Link>
            </div>
          </div>
        </section>

        <WhatsAppFloat />
      </main>
    </>
  );
}
