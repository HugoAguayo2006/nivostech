export default function WhatsAppFloat() {
  const url = "https://wa.me/523310392675?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20NIVO%20y%20sus%20páginas%20web.";

  return (
    <a
      className="whatsapp-float"
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
      WhatsApp
    </a>
  );
}
