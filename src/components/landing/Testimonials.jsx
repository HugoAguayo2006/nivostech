import "./Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Cliente Satisfecho",
      company: "Negocio Local",
      text: "NIVOSTECH nos ayudó a crear una página web profesional que realmente representa nuestro negocio. El proceso fue muy claro y el resultado superó nuestras expectativas.",
      rating: 5,
    },
    {
      name: "Emprendedor",
      company: "Startup",
      text: "La atención al detalle y el enfoque en resultados es impresionante. Nuestro sitio web no solo se ve bien, también funciona perfectamente en todos los dispositivos.",
      rating: 5,
    },
    {
      name: "Pequeña Empresa",
      company: "Comercio",
      text: "El soporte técnico y la comunicación durante todo el proceso fueron excelentes. Recomendamos totalmente a NIVOSTECH para cualquier proyecto web.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonios" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Lo que dicen nuestros clientes</h2>
          <p className="testimonials-subtitle">
            La satisfacción de nuestros clientes es nuestra prioridad.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="testimonial-star">
                    ★
                  </span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-author-name">{testimonial.name}</div>
                <div className="testimonial-author-company">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

