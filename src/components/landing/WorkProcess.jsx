import "./WorkProcess.css";

export default function WorkProcess() {
  const steps = [
    {
      number: "01",
      title: "Reunión Inicial",
      description:
        "Platicamos sobre tu proyecto, objetivos y necesidades. Definimos el alcance y el plan adecuado para tu negocio.",
    },
    {
      number: "02",
      title: "Diseño y Desarrollo",
      description:
        "Creamos el diseño de tu sitio web y comenzamos el desarrollo. Te mantenemos informado en cada etapa del proceso.",
    },
    {
      number: "03",
      title: "Revisión y Ajustes",
      description:
        "Revisamos juntos el resultado, hacemos los ajustes necesarios y nos aseguramos de que todo esté perfecto.",
    },
    {
      number: "04",
      title: "Entrega y Soporte",
      description:
        "Entregamos tu sitio web listo para funcionar. Incluimos soporte técnico inicial para resolver cualquier duda.",
    },
  ];

  return (
    <section id="proceso" className="work-process-section">
      <div className="work-process-container">
        <div className="work-process-header">
          <h2 className="work-process-title">Nuestro Proceso de Trabajo</h2>
          <p className="work-process-subtitle">
            Un proceso claro y transparente desde el inicio hasta la entrega de
            tu proyecto.
          </p>
        </div>

        <div className="work-process-steps">
          {steps.map((step, index) => (
            <div key={index} className="work-process-step">
              <div className="work-process-number">{step.number}</div>
              <div className="work-process-content">
                <h3 className="work-process-step-title">{step.title}</h3>
                <p className="work-process-step-description">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="work-process-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

