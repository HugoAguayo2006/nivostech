import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: "⚡",
      title: "Rápido y Optimizado",
      description:
        "Sitios web con carga ultrarrápida y optimizados para SEO, garantizando una mejor experiencia de usuario.",
    },
    {
      icon: "📱",
      title: "100% Responsivo",
      description:
        "Diseñamos para todos los dispositivos. Tu sitio se verá perfecto en móvil, tablet y desktop.",
    },
    {
      icon: "🎨",
      title: "Diseño Moderno",
      description:
        "Interfaces limpias, profesionales y alineadas a las mejores prácticas de diseño web actual.",
    },
    {
      icon: "🔧",
      title: "Soporte Técnico",
      description:
        "Incluimos soporte técnico inicial para asegurar que todo funcione perfectamente desde el inicio.",
    },
    {
      icon: "💰",
      title: "Precios Transparentes",
      description:
        "Sin costos ocultos. Sabes exactamente qué incluye cada plan y cuánto cuesta desde el principio.",
    },
    {
      icon: "🚀",
      title: "Enfoque en Resultados",
      description:
        "No solo creamos sitios bonitos, diseñamos soluciones que ayudan a tu negocio a crecer.",
    },
  ];

  return (
    <section id="por-que-elegirnos" className="why-choose-section">
      <div className="why-choose-container">
        <div className="why-choose-header">
          <h2 className="why-choose-title">¿Por qué elegir NIVOSTECH?</h2>
          <p className="why-choose-subtitle">
            Trabajamos de la mano con emprendedores y pequeñas empresas para
            crear presencia digital sin complicaciones.
          </p>
        </div>

        <div className="why-choose-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="why-choose-card">
              <div className="why-choose-icon">{benefit.icon}</div>
              <h3 className="why-choose-card-title">{benefit.title}</h3>
              <p className="why-choose-card-description">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

