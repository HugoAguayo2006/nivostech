import { Link } from "react-router-dom";
import "./RestaurantSection.css";

export default function RestaurantSection() {
  return (
    <section id="restaurantes" className="restaurant-section">
      <div className="restaurant-container">
        <div className="restaurant-card">
          <h2 className="restaurant-title">¿Tienes un restaurante?</h2>

          <p className="restaurant-description">
            Digitaliza tu menú y facilita los pedidos de tus clientes con una
            solución práctica y moderna.
          </p>

          <ul className="restaurant-features">
            <li>Menú digital accesible desde celular</li>
            <li>Código QR para mesas</li>
            <li>Actualiza precios y platillos fácilmente</li>
            <li>Imagen profesional para tu restaurante</li>
          </ul>

          <Link to="/servicios/plan-menu" className="restaurant-btn">
            Ver menú digital →
          </Link>
        </div>
      </div>
    </section>
  );
}
