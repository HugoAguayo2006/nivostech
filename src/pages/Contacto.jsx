import { useRef } from "react";
import emailjs from "emailjs-com";
import WhatsAppFloat from "../WhatsAppFloat";

function Contacto() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔴 RELLENAR CON TUS DATOS DE EMAILJS
    const SERVICE_ID = "service_xxxxxx";
    const TEMPLATE_ID = "template_xxxxxx";
    const PUBLIC_KEY = "xxxxxxxxxxxxxxxx";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          alert("Mensaje enviado correctamente 😄");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Hubo un error al enviar el mensaje 😢");
        }
      );
  };

  return (
    <div className="page">
      <section className="page-section">
        <div className="page-header">
          <h1 className="page-title">Contacto</h1>
          <p className="page-subtitle">
            Estamos aquí para ayudarte. Ponte en contacto con nosotros y
            hablemos de tu proyecto.
          </p>
        </div>

        <div className="contact-grid">
          {/* Tarjeta WhatsApp */}
          <div className="contact-card">
            <h3>WhatsApp</h3>
            <p>
              Escríbenos por WhatsApp y platicamos sobre tu idea de forma rápida
              y directa. Estamos disponibles para resolver tus dudas y agendar
              una reunión.
            </p>
            <a
              href="https://wa.me/523310392675?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20NIVO%20y%20sus%20páginas%20web."
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn-main"
            >
              Abrir WhatsApp
            </a>
          </div>

          {/* Tarjeta EmailJS */}
          <div className="contact-card">
            <h3>Formulario de contacto</h3>
            <p style={{ marginBottom: "1rem", fontSize: "0.9rem" }}>
              Completa el formulario y nos pondremos en contacto contigo a la
              brevedad.
            </p>
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <label>
                Nombre
                <input type="text" name="user_name" required />
              </label>
              <label>
                Correo
                <input type="email" name="user_email" required />
              </label>
              <label>
                Teléfono (opcional)
                <input type="tel" name="user_phone" />
              </label>
              <label>
                Mensaje
                <textarea name="message" rows="4" required />
              </label>
              <button type="submit">Enviar mensaje</button>
            </form>
            <small>
              Formulario conectado con{" "}
              <a
                href="https://www.emailjs.com/?src=email-footer"
                target="_blank"
                rel="noreferrer"
              >
                EmailJS
              </a>
              .
            </small>
          </div>
        </div>

        <div className="contact-info">
          <div className="info-card">
            <h3>Ubicación</h3>
            <p>Guadalajara, Jalisco, México</p>
          </div>
          <div className="info-card">
            <h3>Horario de atención</h3>
            <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
            <p>Sábados: 10:00 AM - 2:00 PM</p>
          </div>
        </div>
      </section>

      <WhatsAppFloat />

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} NIVO · Diseño y desarrollo de páginas
          web.
        </p>
      </footer>
    </div>
  );
}

export default Contacto;

