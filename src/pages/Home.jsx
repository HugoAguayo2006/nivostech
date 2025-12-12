import WhatsAppFloat from "../WhatsAppFloat";
import { useRef } from "react";
import emailjs from "emailjs-com";

const projectImages = [
  "/img/proyecto1.webp",
  "/img/proyecto2.webp",
  "/img/proyecto3.webp",
];

function Home() {
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
      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="hero-bg" />

        <div className="hero-content">
          {/* TEXTO IZQUIERDA */}
          <div className="hero-inner">
            <p className="hero-tag">
              Estudio de páginas web en Guadalajara | NIVO
            </p>

            <h1 className="hero-title">
              Generamos presencia digital
              <br />
              para tu negocio.
            </h1>

            <button
              className="hero-btn"
              onClick={() => {
                const contacto = document.getElementById("contacto");
                if (contacto) contacto.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Agendar reunión
            </button>
            <button
              className="hero-btn"
              onClick={() => {
                const contacto = document.getElementById("contacto");
                if (contacto) contacto.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Nuestros Proyectos
            </button>

            <p className="hero-note">
              * Reunión de 15 minutos para entender tus necesidades.
            </p>
          </div>

          {/* VIDEO DERECHA */}
          <div className="hero-media">
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/video/hero.mp4" type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="contact">
        <p className="hero-title">Hablemos de tu proyecto</p>

        <p className="section-subtitle">
          Cuéntanos qué tienes en mente y te ayudamos a convertirlo en una
          página web funcional y moderna.
        </p>

        <div className="contact-grid">
          {/* Tarjeta WhatsApp */}
          <div className="contact-card">
            <h3>WhatsApp</h3>
            <p>
              Escríbenos por WhatsApp y platicamos sobre tu idea de forma rápida
              y directa.
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
      </section>

      {/* WhatsApp SIEMPRE visible */}
      <WhatsAppFloat />

      {/* FOOTER */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} NIVO · Diseño y desarrollo de páginas
          web.
        </p>
      </footer>
    </div>
  );
}

export default Home;

