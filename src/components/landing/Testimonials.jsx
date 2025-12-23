import "./Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
  name: "Dirección Académica",
  company: "Instituto Nueva Galicia",
  text: "NIVOSTECH logró transmitir la esencia y valores de nuestra institución en un sitio web claro, moderno y funcional. El acompañamiento fue constante y siempre mostraron disposición para ajustar cada detalle según nuestras necesidades.",
  rating: 5,
},

{
  name: "Coordinación Administrativa",
  company: "Colegio Colonial",
  text: "El desarollo de nuestro sitio web mejoró notablemente la comunicación con padres de familia y alumnos. La información ahora es clara, accesible y fácil de encontrar. Estamos muy satisfechos con el resultado.",
  rating: 5,
},

{
  name: "Colaboradora y fundadora",
  company: "Discípulos Guadalajara",
  text: "El soporte técnico y la comunicación durante todo el desarrollo fueron excelentes. Recomendamos ampliamente a NIVOSTECH para cualquier proyecto digital.",
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

