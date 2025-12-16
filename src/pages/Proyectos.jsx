// src/pages/Proyectos.jsx
import { useMemo, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PROYECTOS } from "../data.js";
import "../components/Projects/Projects.css";

const FILTERS = ["Todos", "Institucional", "Tecnológico", "Organización"];

export default function Proyectos() {
  const [active, setActive] = useState("Todos");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  /* ====== FILTRO ====== */
  const list = useMemo(() => {
    if (active === "Todos") return PROYECTOS;
    return PROYECTOS.filter((p) => p.category === active);
  }, [active]);

  /* ====== ABRIR / CERRAR MODAL ====== */
  const openProject = (project) => {
    setSelected(project);
    setOpen(true);
    document.body.classList.add("modal-open"); // 🔥 oculta navbar (por CSS global)
  };

  const closeProject = () => {
    setOpen(false);
    setSelected(null);
    document.body.classList.remove("modal-open"); // 🔥 muestra navbar
  };

  /* ====== ESC PARA CERRAR MODAL ====== */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeProject();
    };

    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Proyectos | NIVOSTECH</title>
        <meta
          name="description"
          content="Explora el portafolio de NIVOSTECH: sitios web con diseño premium, alto performance y enfoque en resultados. Da clic en cada proyecto para ver el caso completo."
        />
        <link rel="canonical" href="https://www.nivostech.com/proyectos" />
      </Helmet>

      <section className="projects-page">
        {/* ====== HERO ====== */}
        <header className="projects-hero">
          <div className="projects-hero-bg" />
          <div className="projects-hero-content">
            <div className="projects-pill">Portafolio</div>

            <h1 className="projects-title">
              Nuestros <span>Proyectos</span>
            </h1>

            <p className="projects-subtitle">
              Sitios web reales con diseño premium, performance y enfoque en
              resultados. Aquí no solo mostramos “bonito”: mostramos decisiones.
            </p>

            <div className="projects-hero-actions">
              <Link className="projects-btn ghost" to="/contacto">
                Agendar reunión
              </Link>
            </div>

            <div className="projects-metrics">
              <div className="metric">
                <div className="metric-num">+{PROYECTOS.length}</div>
                <div className="metric-label">Proyectos</div>
              </div>
              <div className="metric">
                <div className="metric-num">+5000</div>
                <div className="metric-label">Personas alcanzadas</div>
              </div>
              <div className="metric">
                <div className="metric-num">+2</div>
                <div className="metric-label">Años de experiencia</div>
              </div>
            </div>
          </div>
        </header>

        {/* ====== FILTERS ====== */}
        <div className="projects-toolbar" id="grid">
          <div className="projects-filters">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`filter-chip ${active === f ? "is-active" : ""}`}
                onClick={() => setActive(f)}
                type="button"
              >
                {f}
              </button>
            ))}
          </div>

          <div className="projects-hint">
            Tip: haz clic en un proyecto para ver el caso completo.
          </div>
        </div>

        {/* ====== GRID ====== */}
        <div className="projects-grid">
          {list.map((p) => (
            <article key={p.id} className="project-card">
              <button
                className="project-card-btn"
                onClick={() => openProject(p)}
                type="button"
              >
                <div className="project-media">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="project-img"
                  />

                  <div className="project-overlay">
                    <div className="project-overlay-top">
                      <span className="badge">{p.type}</span>
                      <span className="badge soft">{p.year}</span>
                    </div>

                    <div className="project-overlay-bottom">
                      <div className="project-name">{p.title}</div>
                      <div className="project-short">{p.short}</div>

                      <div className="project-stack">
                        {p.stack.slice(0, 4).map((s) => (
                          <span key={s} className="stack-pill">
                            {s}
                          </span>
                        ))}
                      </div>

                      <div className="project-cta">
                        Ver caso <span className="arrow">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>

        {/* ====== CTA FINAL ====== */}
        <div className="projects-final">
          <div className="final-card">
            <h2 className="final-title">¿Tu proyecto puede ser el siguiente?</h2>
            <p className="final-sub">
              Lo armamos con diseño serio, velocidad real y estructura para
              crecer.
            </p>
            <div className="final-actions">
              <Link className="projects-btn primary" to="/contacto">
                Contáctanos
              </Link>
              <Link className="projects-btn ghost" to="/servicios">
                Ver servicios
              </Link>
            </div>
          </div>
        </div>

        {/* ====== MODAL ====== */}
        {open && selected && (
          <ProjectModal project={selected} onClose={closeProject} />
        )}
      </section>
    </>
  );
}

/* ====== MODAL COMPONENT (con Lightbox) ====== */
function ProjectModal({ project, onClose }) {
  const [zoomImage, setZoomImage] = useState(null);

  // ESC: si hay imagen en lightbox, cierra lightbox; si no, cierra modal
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (zoomImage) setZoomImage(null);
      else onClose();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomImage, onClose]);

  return (
    <>
      <div className="modal-backdrop" onMouseDown={onClose}>
        <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <div>
              <div className="modal-kicker">
                <span className="badge">{project.type}</span>
                <span className="badge soft">{project.year}</span>
                <span className="badge soft">{project.tag}</span>
              </div>

              <h3 className="modal-title">{project.title}</h3>
              <p className="modal-sub">{project.short}</p>
            </div>

            <button
              className="modal-close"
              onClick={onClose}
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>

          <div className="modal-body">
            <div className="modal-left">
              {/* ✅ CLICK PARA ABRIR IMAGEN GRANDE */}
              <div
                className="modal-cover clickable"
                onClick={() => setZoomImage(project.cover)}
              >
                <img src={project.cover} alt={project.title} />
              </div>

              {project.gallery?.length > 0 && (
                <div className="modal-gallery">
                  {project.gallery.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      loading="lazy"
                      className="clickable"
                      onClick={() => setZoomImage(src)}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="modal-right">
              <div className="case-block">
                <h4>El reto</h4>
                <p>{project.reto}</p>
              </div>

              <div className="case-block">
                <h4>La solución</h4>
                <p>{project.solucion}</p>
              </div>

              <div className="case-block">
                <h4>Resultados</h4>
                <ul>
                  {project.resultados?.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>

              <div className="case-block">
                <h4>Stack</h4>
                <div className="modal-stack">
                  {project.stack.map((s) => (
                    <span key={s} className="stack-pill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                {project.liveUrl ? (
                  <a
                    className="projects-btn primary"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visitar sitio
                  </a>
                ) : (
                  <span className="private-note">
                    Proyecto privado (sin enlace público)
                  </span>
                )}

                <button className="projects-btn ghost" onClick={onClose}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====== LIGHTBOX ====== */}
      {zoomImage && (
        <div className="lightbox-backdrop" onClick={() => setZoomImage(null)}>
          <img src={zoomImage} alt="Vista ampliada" />
          <button
            className="lightbox-close"
            onClick={() => setZoomImage(null)}
            aria-label="Cerrar imagen"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
