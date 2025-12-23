import { Link } from "react-router-dom";
import "./ServicesSection.css";

export default function ServicesSection() {
  const services = [
    {
      id: "plan-1",
      title: "Plan 1: Sitio web simple",
      description: "Ideal para negocios que solo necesitan presencia profesional.",
      features: [
        "Presencia profesional en internet",

"Página rápida y fácil de usar",

"Diseño adaptable a cualquier dispositivo",

"Opción económica para empezar",

"Base lista para crecer en el futuro"
      ],
      link: "/servicios/plan-1",
    },
    {
      id: "plan-2",
      title: "Plan 2: Sitio web complejo",
      description: "Ideal para negocios que necesitan un sistema más completo.",
      features: [
        "Base de datos para guardar información",
"Panel privado para administrar el sitio",
"Blog fácil de actualizar",
"Funciones avanzadas según las necesidades del negocio",

      ],
      link: "/servicios/plan-2",
    },
    {
      id: "plan-3",
      title: "Plan 3: Sitio + Redes Sociales",
      description: "Ideal para negocios que quieren presencia digital completa.",
      features: [
"Página web incluida",
"Administración de redes sociales",
"Creación de contenido profesional",
"Reportes mensuales de resultados",

      ],
      link: "/servicios/plan-3",
    },
    
  ];

  return (
    <section id="servicios" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Nuestros Servicios</h2>
          <p className="services-subtitle">
            Ofrecemos diferentes planes para adaptarnos a las necesidades de tu
            negocio.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card-landing">
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <Link to={service.link} className="service-card-link">
                Ver más detalles →
              </Link>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <Link to="/servicios" className="services-btn">
            Ver todos los planes
          </Link>
        </div>
      </div>
    </section>
  );
}

