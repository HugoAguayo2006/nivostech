// import WhatsAppFloat from "../WhatsAppFloat";

// function Nosotros() {
//   return (
//     <div className="page">
//       <section className="page-section">
//         <div className="page-header">
//           <h1 className="page-title">Nosotros</h1>
//           <p className="page-subtitle">
//             Conoce más sobre NIVO y nuestra pasión por crear presencia digital
//             para tu negocio.
//           </p>
//         </div>

//         <div className="page-content">
//           <div className="content-card">
//             <h2>¿Quiénes somos?</h2>
//             <p>
//               NIVO es un estudio especializado en diseño y desarrollo de páginas
//               web con sede en Guadalajara. Nos dedicamos a crear soluciones
//               digitales que impulsen la presencia online de tu negocio.
//             </p>
//           </div>

//           <div className="content-card">
//             <h2>Nuestra misión</h2>
//             <p>
//               Generar presencia digital para tu negocio mediante páginas web
//               modernas, funcionales y optimizadas que reflejen la esencia de tu
//               marca y conecten con tu audiencia.
//             </p>
//           </div>

//           <div className="content-card">
//             <h2>Nuestro enfoque</h2>
//             <p>
//               Trabajamos de cerca contigo para entender tus necesidades y
//               objetivos. Cada proyecto es único y lo desarrollamos con atención
//               al detalle, desde la conceptualización hasta el lanzamiento.
//             </p>
//           </div>

//           <div className="content-card">
//             <h2>¿Por qué elegirnos?</h2>
//             <ul className="feature-list">
//               <li>Diseño moderno y profesional</li>
//               <li>Desarrollo optimizado y rápido</li>
//               <li>Atención personalizada</li>
//               <li>Compromiso con la calidad</li>
//               <li>Experiencia en diferentes industrias</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       <WhatsAppFloat />

//       <footer className="footer">
//         <p>
//           © {new Date().getFullYear()} NIVO · Diseño y desarrollo de páginas
//           web.
//         </p>
//       </footer>
//     </div>
//   );
// }

// export default Nosotros;




export default function Nosotros() {
  return (
    <div className="page">

      {/* HERO NOSOTROS */}
      <section className="about-hero">
        <h1 className="about-title">Sobre NIVOS</h1>
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
              Somos un equipo de desarrolladores y diseñadores enfocados en crear páginas web funcionales,
              modernas y fáciles de usar.
              <br />
              <br />
              Trabajamos de la mano con emprendedores, comercios y pequeñas empresas que quieren tener
              presencia en internet sin complicaciones técnicas ni costos innecesarios.
            </p>
          </div>
        </div>
      </section>

      {/* MISIÓN / VISIÓN */}
      <section className="about-grid">
        <div className="about-card">
          <h3>Misión</h3>
          <p>
            Crear soluciones web simples y funcionales que ayuden
            a los negocios locales a tener mayor visibilidad, conectar con
            más clientes y crecer en el entorno digital.
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
              <strong>Simplicidad</strong> — Creemos en soluciones claras, sin procesos
              innecesarios ni complicaciones técnicas.
            </li>

            <li>
              <strong>Transparencia</strong> — Hablamos claro, tanto en precios como en
              procesos y tiempos de entrega.
            </li>

            <li>
              <strong>Cercanía</strong> — Trabajamos de forma directa y humana con cada
              cliente, entendiendo su negocio como propio.
            </li>

            <li>
              <strong>Calidad</strong> — Cuidamos cada detalle para entregar productos
              funcionales, estables y bien construidos.
            </li>

            <li>
              <strong>Compromiso</strong> — Nos involucramos en cada proyecto para que
              el resultado realmente aporte valor.
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}
