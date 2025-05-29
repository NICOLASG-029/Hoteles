import "../styles/galeria.css";

export const Galeria = () => {
  return (
    <div className="galeria">
      <h2>Más Información</h2>
      <div className="fila">
        <div className="foto-producto">
          <p>
            Horarios: Abierto de lunes a domingo, de 12:00 p.m. a 10:00 p.m.
          </p>
          <p>
            Ambiente: Acogedor y familiar con música en vivo los viernes por la
            noche.
          </p>
        </div>
        <div className="foto-producto">
          <p>Servicios: WiFi gratuito, estacionamiento, entrega a domicilio.</p>
          <p>
            Eventos: Noches temáticas, eventos de degustación, celebraciones
            especiales.
          </p>
        </div>
        <div className="foto-producto">
          <p>
            Lo que dicen nuestros clientes: ¡Excelente comida y ambiente!
            Volveremos seguro.
          </p>
          <p>
            Síguenos en redes sociales: @tu_restaurante en Instagram y Twitter
            para actualizaciones y ofertas exclusivas.
          </p>
        </div>
      </div>
      {/* Puedes agregar más filas según sea necesario */}
    </div>
  );
};
