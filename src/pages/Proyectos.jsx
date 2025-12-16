// src/pages/Proyectos.jsx
import { useMemo, useState, useEffect } from "react";
import { PROYECTOS } from "../data.js";
import "../components/Projects/Projects.css";

const FILTERS = ["Todos", "Institucional"];

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
    document.body.classList.add("modal-open"); // 🔥 oculta navbar
  };

  const closeProject = () => {
    setOpen(false);
    setSelected(null);
    document.body.classList.remove("modal-open"); // 🔥 muestra navbar
  };

  /* ====== ESC PARA CERRAR ====== */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeProject();
    };

    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
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
            <a className="projects-btn ghost" href="/contacto">
              Agendar reunión
            </a>
          </div>

          <div className="projects-metrics">
            <div className="metric">
              <div className="metric-num">+{PROYECTOS.length}</div>
              <div className="metric-label">Proyectos</div>
            </div>
            <div className="metric">
              <div className="metric-num">+500</div>
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
            Lo armamos con diseño serio, velocidad real y estructura para crecer.
          </p>
          <div className="final-actions">
            <a className="projects-btn primary" href="/contacto">
              Contáctanos
            </a>
            <a className="projects-btn ghost" href="/servicios">
              Ver servicios
            </a>
          </div>
        </div>
      </div>

      {/* ====== MODAL ====== */}
      {open && selected && (
        <ProjectModal project={selected} onClose={closeProject} />
      )}
    </section>
  );
}

/* ====== MODAL COMPONENT ====== */
function ProjectModal({ project, onClose }) {
  return (
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
            <div className="modal-cover">
              <img src={project.cover} alt={project.title} />
            </div>

            {project.gallery?.length > 0 && (
              <div className="modal-gallery">
                {project.gallery.map((src) => (
                  <img key={src} src={src} alt="" loading="lazy" />
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
              <a
                className="projects-btn primary"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Visitar sitio
              </a>
              <button className="projects-btn ghost" onClick={onClose}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
