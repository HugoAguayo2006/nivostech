import { Link } from "react-router-dom";
import { PROYECTOS } from "../../data.js";
import "./FeaturedProjects.css";

export default function FeaturedProjects() {
  // Mostrar los primeros 3 proyectos
  const featuredProjects = PROYECTOS.slice(0, 3);

  return (
    <section id="proyectos-destacados" className="featured-projects-section">
      <div className="featured-projects-container">
        <div className="featured-projects-header">
          <h2 className="featured-projects-title">Proyectos Destacados</h2>
          <p className="featured-projects-subtitle">
            Algunos de nuestros trabajos más recientes. Cada proyecto está
            diseñado con atención al detalle y enfoque en resultados.
          </p>
        </div>

        <div className="featured-projects-grid">
          {featuredProjects.map((project) => (
            <div key={project.id} className="featured-project-card">
              <div className="featured-project-image-wrapper">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="featured-project-image"
                  loading="lazy"
                />
                <div className="featured-project-overlay">
                  <span className="featured-project-badge">{project.type}</span>
                </div>
              </div>
              
              <div className="featured-project-content">
                <h3 className="featured-project-title">{project.title}</h3>
                <p className="featured-project-description">{project.short}</p>
                
                <div className="featured-project-stack">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span key={tech} className="featured-project-tech">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="featured-project-link"
                  >
                    Ver proyecto →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="featured-projects-cta">
          <Link to="/proyectos" className="featured-projects-btn">
            Ver todos los proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}

