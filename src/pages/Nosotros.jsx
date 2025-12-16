import { Helmet } from "react-helmet-async";
import WhatsAppFloat from "../WhatsAppFloat";

export default function Nosotros() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Sobre Nosotros | NIVOSTECH</title>
        <meta
          name="description"
          content="Conoce a NIVOSTECH, un estudio de diseño y desarrollo web en Guadalajara enfocado en crear páginas modernas, funcionales y alineadas a objetivos reales de negocio."
        />
        <link rel="canonical" href="https://www.nivostech.com/nosotros" />
      </Helmet>

      <div className="page">
        {/* HERO NOSOTROS */}
        <section className="about-hero">
          <h1 className="about-title">Sobre NIVOSTECH</h1>
          <p className="about-subtitle">
            Diseñamos experiencias digitales claras, funcionales y alineadas a
            objetivos reales de negocio.
          </p>
        </section>

        {/* QUIÉNES SOMOS */}
        <section className="about-split">
          <div className="about-left">
            <h2 className="about-big-title">¿Quiénes Somos?</h2>
          </div>

          <div className="about-right">
            <div className="about-card">
              <p>
                Somos un equipo de desarrolladores y diseñadores enfocados en
                crear páginas web funcionales, modernas y fáciles de usar.
                <br />
                <br />
                Trabajamos de la mano con emprendedores, comercios y pequeñas
                empresas que quieren tener presencia en internet sin
                complicaciones técnicas ni costos innecesarios.
              </p>
            </div>
          </div>
        </section>

        {/* MISIÓN / VISIÓN */}
        <section className="about-grid">
          <div className="about-card">
            <h3>Misión</h3>
            <p>
              Crear soluciones web simples y funcionales que ayuden a los
              negocios locales a tener mayor visibilidad, conectar con más
              clientes y crecer en el entorno digital.
            </p>
          </div>

          <div className="about-card">
            <h3>Visión</h3>
            <p>
              Ser un referente en soluciones digitales para negocios locales,
              demostrando que una buena presencia en internet no tiene que ser
              ni costosa, sino clara, útil y bien diseñada.
            </p>
          </div>
        </section>

        {/* VALORES */}
        <section className="about-section">
          <div className="about-card">
            <h2>Valores</h2>

            <ul className="about-values">
              <li>
                <strong>Simplicidad</strong> — Creemos en soluciones claras, sin
                procesos innecesarios ni complicaciones técnicas.
              </li>

              <li>
                <strong>Transparencia</strong> — Hablamos claro, tanto en precios
                como en procesos y tiempos de entrega.
              </li>

              <li>
                <strong>Cercanía</strong> — Trabajamos de forma directa y humana
                con cada cliente, entendiendo su negocio como propio.
              </li>

              <li>
                <strong>Calidad</strong> — Cuidamos cada detalle para entregar
                productos funcionales, estables y bien construidos.
              </li>

              <li>
                <strong>Compromiso</strong> — Nos involucramos en cada proyecto
                para que el resultado realmente aporte valor.
              </li>
            </ul>
          </div>

          <WhatsAppFloat />
        </section>
      </div>
    </>
  );
}
