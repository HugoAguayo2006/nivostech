// src/data.js

export const PROYECTOS = [
  {
    id: "ing",
    title: "Instituto Nueva Galicia",
    type: "Institucional",
    tag: "Sitio web",
    year: "2025",
    cover: "/proyectos/ing-cover.webp",
    gallery: [
      "/proyectos/ing-1.webp",
      "/proyectos/ing-2.webp",
      "/proyectos/ing-3.webp",
    ],
    short: "Creación completa de la página web.",
    reto:
      "Necesitaban un sitio moderno, rápido y fácil de navegar, con identidad clara y secciones fáciles de actualizar.",
    solucion:
      "Diseño tipo premium tech, arquitectura por secciones, SEO base, optimización de medios y CTA visibles sin saturar.",
    resultados: [
      "Carga más fluida y experiencia más limpia en móvil",
      "Estructura clara para SEO (títulos, meta, canonicals)",
      "Secciones listas para escalar (galería, contacto, etc.)",
    ],
    stack: ["React", "Vite", "CSS", "SEO", "Responsive"],
    category: "Institucional",
    liveUrl: "https://www.nuevagalicia.edu.mx",
  },
  {
    id: "colonial",
    title: "Colegio Colonial",
    type: "Institucional",
    tag: "Sitio web",
    year: "2024",
    cover: "/proyectos/col-cover.webp",
    gallery: [
      "/proyectos/col-1.webp",
      "/proyectos/col-2.webp",
      "/proyectos/col-3.webp",
    ],
    short: "Creación completa de la página web.",
    reto:
      "Necesitaban un sitio moderno, rápido y fácil de navegar, con identidad clara y secciones fáciles de actualizar.",
    solucion:
      "Diseño tipo premium tech, arquitectura por secciones, SEO base, optimización de medios y CTA visibles sin saturar.",
    resultados: [
      "Una galeria en la web",
      "Carga más fluida y experiencia más limpia en móvil",
      "Estructura clara para SEO (títulos, meta, canonicals)",
      "Secciones listas para escalar (galería, contacto, etc.)",
    ],
    stack: ["Wix", "Wix Studio", "Responsive"],
    category: "Institucional",
    liveUrl: "https://www.colegiocolonial.edu.mx/",
  },
  {
  id: "smart-mirror",
  title: "Smart Mirror",
  type: "Tecnológico",
  tag: "Experiencia digital",
  year: "2025",
  cover: "/proyectos/smartmirror-cover.webp",
  gallery: [
    "/proyectos/smartmirror-1.webp",
    "/proyectos/smartmirror-2.webp",
    "/proyectos/smartmirror-3.webp",
  ],
  short:
    "Diseño y desarrollo de una experiencia digital interactiva con sistema de inicio de sesión seguro y reconocimiento facial.",
  reto:
    "Ofrecer una experiencia personalizada desde el primer momento, permitiendo que cada usuario accediera a su información de forma rápida, segura y sin fricción.",
  solucion:
    "Se implementó una aplicación web moderna con autenticación mediante base de datos y reconocimiento facial, integrada a una interfaz clara y fluida.",
  resultados: [
    "Inicio de sesión personalizado mediante reconocimiento facial (Face ID)",
    "Gestión de usuarios y datos desde base de datos",
    "Interfaz moderna, rápida y fácil de usar",
    "Sistema preparado para escalar a múltiples usuarios",
  ],
  stack: [
    "React",
    "JSX",
    "Node.js",
    "Express",
    "Base de datos",
    "Autenticación",
    "Face Recognition",
    "UI/UX Design",
  ],
  category: "Tecnológico",
  liveUrl: "",
},

{
  id: "peh",
  title: "Pasitos Education & Health",
  type: "Organización",
  tag: "Sitio web",
  year: "2024",
  cover: "/proyectos/peh-cover.webp",
  gallery: [
    "/proyectos/peh-1.webp",
    "/proyectos/peh-2.webp",
    "/proyectos/peh-3.webp"
  ],
  short: "Optimización y mejora del sitio web institucional.",
  reto:
    "El sitio web necesitaba una actualización visual y estructural para comunicar mejor la misión de la organización, mejorar la navegación y facilitar la gestión de contenidos internos.",
  solucion:
    "Rediseño del sitio en WordPress utilizando Elementor, reorganización de secciones, mejora visual consistente con la identidad institucional y optimización básica de rendimiento y usabilidad.",
  resultados: [
    "Navegación más clara y estructura intuitiva para usuarios y donantes",
    "Mejor presentación de la misión, programas y contacto",
    "Sitio autoadministrable para el equipo interno sin conocimientos técnicos",
    "Mejor rendimiento y visualización en dispositivos móviles"
  ],
  stack: ["WordPress", "Elementor", "HTML", "CSS", "SEO básico", "Responsive"],
  category: "Organización",
  liveUrl: "https://www.pasitosac.org"
},
{
  id: "omega",
  title: "OMEGA",
  type: "Tecnológico",
  tag: "Gestión de tarjetas",
  year: "2025",
  cover: "/proyectos/omega-cover.webp",
  gallery: [
    "/proyectos/omega-1.webp",
    "/proyectos/omega-2.webp",
    "/proyectos/omega-4.webp",
  ],
  short:
    "Plataforma digital para la administración de tarjetas, desarrollada como solución para un reto de Capital One.",
  reto:
    "Diseñar una solución clara y funcional que permitiera a los usuarios administrar múltiples tarjetas de manera segura, organizada y sencilla.",
  solucion:
    "Se construyó una aplicación web moderna enfocada en la gestión de tarjetas, priorizando usabilidad, claridad visual y experiencia del usuario.",
  resultados: [
    "Administración centralizada de tarjetas",
    "Interfaz intuitiva y fácil de navegar",
    "Experiencia clara orientada al usuario",
    "Propuesta funcional alineada a un entorno financiero",
  ],
  stack: [
    "React",
    "JSX",
    "Node.js",
    "Express",
    "Frontend moderno",
    "UI/UX Design",
  ],
  category: "Tecnológico",
  liveUrl: "",
},
{
  id: "sc",
  title: "Smart Cities – Movilidad Urbana",
  type: "Web App",
  tag: "Plataforma Digital",
  year: "2025",
  cover: "/proyectos/sc-cover.webp",
  gallery: [
    "/proyectos/sc-1.webp",
    "/proyectos/sc-2.webp",
    "/proyectos/sc-3.webp"
  ],
  short: "Plataforma web para fomentar el uso del transporte público y la movilidad urbana inteligente.",
  reto:
    "Promover el uso del transporte público a través de una plataforma digital intuitiva que ayude a los usuarios a tomar mejores decisiones de movilidad, reducir costos y disminuir el impacto ambiental.",
  solucion:
    "Desarrollo de una web app interactiva que integra visualización de rutas, control de gastos, recompensas por movilidad sostenible y consumo de APIs externas, con una experiencia clara y accesible para el usuario.",
  resultados: [
    "Interfaz clara que incentiva el uso del transporte público",
    "Visualización eficiente de rutas y opciones de movilidad",
    "Sistema de puntos para fomentar hábitos sostenibles",
    "Arquitectura escalable para integración de nuevos servicios urbanos"
  ],
  stack: [
    "React",
    "Vite",
    "Tailwind CSS",
    "MongoDB",
    "Python",
    "REST APIs"
  ],
  category: "Smart Cities",
  liveUrl: "https://www.youtube.com/watch?v=0lQdrmrLZg4"
}

  
];
