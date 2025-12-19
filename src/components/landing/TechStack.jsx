import "./TechStack.css";

export default function TechStack() {
  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Vite", category: "Build Tool" },
    { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "WordPress", category: "CMS" },
    { name: "SEO", category: "Optimization" },
    { name: "Responsive Design", category: "Design" },
  ];

  return (
    <section id="tecnologias" className="tech-stack-section">
      <div className="tech-stack-container">
        <div className="tech-stack-header">
          <h2 className="tech-stack-title">Tecnologías que Utilizamos</h2>
          <p className="tech-stack-subtitle">
            Trabajamos con las mejores herramientas y tecnologías modernas para
            crear sitios web de alto rendimiento.
          </p>
        </div>

        <div className="tech-stack-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-stack-item">
              <div className="tech-stack-name">{tech.name}</div>
              <div className="tech-stack-category">{tech.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

