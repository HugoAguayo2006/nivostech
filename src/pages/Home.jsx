import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import WhatsAppFloat from "../WhatsAppFloat";

const projectImages = [
  "/img/proyecto1.webp",
  "/img/proyecto2.webp",
  "/img/proyecto3.webp",
];

function Home() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const SERVICE_ID = "service_7l60jww";
    const TEMPLATE_ID = "template_bclppip";
    const PUBLIC_KEY = "pHDhdhRRjDQLVxpTY";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
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
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>NIVOSTECH</title>
        <meta
          name="description"
          content="Creamos páginas web modernas, rápidas y optimizadas para SEO en Guadalajara. Impulsa la presencia digital de tu negocio con NIVOSTECH."
        />
        <link rel="canonical" href="https://www.nivostech.com/" />
      </Helmet>

      <div className="page">
        {/* HERO */}
        <section id="inicio" className="hero">
          <div className="hero-bg" />

          <div className="hero-content">
            {/* TEXTO IZQUIERDA */}
            <div className="hero-inner">
              <p className="hero-tag">
                Estudio de páginas web en Guadalajara | NIVOSTECH
              </p>

              <h1 className="hero-title">
                Generamos presencia digital
                <br />
                para tu negocio.
              </h1>

              <div className="hero-actions">
                <Link to="/proyectos" className="hero-btn">
                  Nuestros Proyectos
                </Link>
                <Link to="/contacto" className="hero-btn">
                  Agendar reunión
                </Link>
              </div>

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
                preload="metadata"
              >
                <source src="/video/1215.webm" type="video/webm" />
                <source src="/video/1215.mov" type="video/quicktime" />
                <source src="/video/1215.mp4" type="video/mp4" />
                Tu navegador no soporta video HTML5.
              </video>
            </div>
          </div>
        </section>

        {/* DIVISOR */}
        <div
          style={{
            width: "100%",
            height: "0px",
            background: "rgba(255,255,255,0.8)",
          }}
        />

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
                href="https://wa.me/523310392675?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20NIVOSTECH%20y%20sus%20páginas%20web."
                target="_blank"
                rel="noreferrer"
                className="whatsapp-btn-main"
              >
                Abrir WhatsApp
              </a>
            </div>

            {/* Tarjeta Formulario */}
            <div className="contact-card">
              <h3>Formulario de contacto</h3>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="contact-form"
              >
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
            </div>
          </div>
        </section>

        {/* WhatsApp flotante */}
        <WhatsAppFloat />

        {/* FOOTER */}
        <footer className="footer">
          <p>
            © {new Date().getFullYear()} NIVOSTECH · Diseño y desarrollo de páginas
            web.
          </p>
        </footer>
      </div>
    </>
  );
}

export default Home;
