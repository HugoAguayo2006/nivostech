import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <main className="page notfound">
      <Helmet>
        <title>404 | Página no encontrada – NIVOSTECH</title>
        <meta
          name="description"
          content="La página que buscas no existe o fue movida. Regresa a NIVOSTECH."
        />
      </Helmet>

      <h1>404</h1>
      <p>La página que buscas no existe.</p>

      <Link to="/" className="btn-primary">
        Volver al inicio
      </Link>
    </main>
  );
}
