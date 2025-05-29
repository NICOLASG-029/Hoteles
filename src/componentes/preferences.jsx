import { BarMenu } from "./barMenu";

export const Preferences = () => {
  return (
    <div className="d-flex">
      <BarMenu />
      <div className="container p-5">
        <h3 className="p-2">
          <strong>Preferencias y Datos de Uso:</strong>
        </h3>

        <p>
          2.1. <strong>Gestión de Reservas:</strong> Utilizamos tus datos para
          procesar y confirmar tus reservas, así como para comunicarnos contigo
          sobre cualquier detalle relevante.
        </p>

        <br />
        
        <p>
          2.2. <strong>Mejora de Servicios:</strong> Analizamos los datos de uso
          para mejorar constantemente nuestros servicios, personalizar tu
          experiencia y ofrecer recomendaciones gastronómicas adaptadas a tus
          preferencias.
        </p>

        <br />

        <p>
          2.3. <strong>Comunicaciones:</strong> Podemos enviarte comunicaciones
          relacionadas con tus reservas, promociones especiales y
          actualizaciones sobre nuestra plataforma, siempre respetando tus
          preferencias de comunicación.
        </p>

        <br />

        <p>
          2.4. <strong>Adaptación a Dietas Específicas:</strong> Si proporcionas
          información sobre restricciones dietéticas o preferencias
          alimentarias, utilizamos estos datos para asegurarnos de que las
          recomendaciones de restaurantes se alineen con tus necesidades
          alimenticias específicas.
        </p>
        
        <br />

        <p>
          2.5. <strong>Historial de Reservas:</strong> Mantenemos un historial
          de tus reservas anteriores y preferencias para agilizar futuras
          reservas y ofrecerte una experiencia más personalizada cada vez que
          utilices nuestra plataforma.
        </p>
      </div>
    </div>
  );
};
