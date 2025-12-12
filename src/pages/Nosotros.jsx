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
      <section className="about-section">
        <div className="about-card">
          <h2>Quiénes somos</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nunc sit amet laoreet feugiat, nunc magna aliquet
            sapien, vitae convallis justo lorem nec urna. Integer ut
            vulputate elit.
          </p>
        </div>
      </section>

      {/* MISIÓN / VISIÓN */}
      <section className="about-grid">
        <div className="about-card">
          <h3>Misión</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur vehicula, sapien non gravida viverra, lorem justo
            faucibus libero.
          </p>
        </div>

        <div className="about-card">
          <h3>Visión</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae.
          </p>
        </div>
      </section>

      {/* VALORES */}
      <section className="about-section">
        <div className="about-card">
          <h2>Valores</h2>
          <ul className="about-values">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Sed do eiusmod tempor</li>
            <li>Incididunt ut labore</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
