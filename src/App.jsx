import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Proyectos from "./pages/Proyectos";

function AppRoutes() {
  const location = useLocation();

  return (
    <PageTransition>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicios/:planId" element={<Servicios />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </PageTransition>
  );
}

function App() {
  return (
    <Router>
      {/* ===== SEO GLOBAL ===== */}
      <Helmet>
        <html lang="es" />
        <title>NIVOS TECH | Innovación y desarrollo tecnológico</title>

        <meta
          name="description"
          content="NIVOS TECH ofrece soluciones tecnológicas: desarrollo web, innovación digital y servicios a la medida."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="NIVOSTECH" />

        <link rel="canonical" href="https://www.nivostech.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="NIVOSTECH" />
        <meta
          property="og:description"
          content="Innovación, desarrollo web y soluciones tecnológicas a la medida."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nivostech.com/" />
        <meta
          property="og:image"
          content="https://www.nivostech.com/og-image.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NIVOSTECH" />
        <meta
          name="twitter:description"
          content="Soluciones tecnológicas modernas y escalables."
        />
        <meta
          name="twitter:image"
          content="https://www.nivostech.com/og-image.webp"
        />
      </Helmet>

      <ScrollToTop />
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

export default App;
