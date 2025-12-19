import "./StatsSection.css";

export default function StatsSection() {
  const stats = [
    {
      number: "+6",
      label: "Proyectos Entregados",
    },
    {
      number: "+5000",
      label: "Personas Alcanzadas",
    },
    {
      number: "+2",
      label: "Años de Experiencia",
    },
    {
      number: "100%",
      label: "Sitios Responsivos",
    },
  ];

  return (
    <section id="estadisticas" className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

