import { BarMenu } from "./barMenu";

export const Privacy = () => {
  return (
    <div className="d-flex">
      <BarMenu />

      <div className="container p-5">
        <h2>
          <strong>
            Política de Privacidad para Reservas Gastronómicas Online
          </strong>
        </h2>
        <hr />
        <p>
          Bienvenido(a) a nuestro servicio de reservas de restaurantes en línea.
          Agradecemos tu confianza al elegir nuestra plataforma para gestionar
          tus reservas y experiencias gastronómicas. La privacidad y seguridad
          de tus datos personales son de suma importancia para nosotros. Por
          ello, te invitamos a leer detenidamente nuestra Política de
          Privacidad, que describe cómo recopilamos, utilizamos y protegemos la
          información que nos proporcionas al utilizar nuestros servicios.
        </p>
        <h5>1. Información que Recopilamos:</h5>
        <p>
          1.1. <strong>Datos de Registro:</strong> Al crear una cuenta,
          recopilamos información como tu nombre, dirección de correo
          electrónico y número de teléfono.
        </p>
        <p>
          1.2. <strong>Información de Reserva:</strong> Para garantizar una
          experiencia sin contratiempos, recopilamos detalles sobre tus
          reservas, preferencias alimentarias y cualquier solicitud especial.
        </p>
        <p>
          1.3. <strong>Información de Pago:</strong> Si decides realizar pagos a
          través de nuestra plataforma, recopilamos la información necesaria
          para procesar las transacciones de manera segura.
        </p>
        <p>
          1.4. <strong>Datos de Uso:</strong> Recopilamos información sobre cómo
          interactúas con nuestra plataforma, como las páginas que visitas, las
          funciones que utilizas y el tiempo que pasas en el sitio.
        </p>

        <p>
            Tus Derechos: Tienes el derecho de acceder, corregir, eliminar
            o limitar el procesamiento de tu información personal. Puedes gestionar
            tus preferencias de privacidad desde tu cuenta.
        </p>
        <p>
          Nos reservamos el derecho de actualizar esta Política de Privacidad en
          cualquier momento. Te notificaremos sobre cambios significativos y te
          invitamos a revisar periódicamente esta página. Al utilizar nuestros
          servicios, aceptas las prácticas descritas en esta Política de
          Privacidad. Si tienes alguna pregunta o inquietud, no dudes en ponerte
          en contacto con nuestro equipo de soporte. ¡Gracias por confiar en
          nosotros para hacer tus reservas gastronómicas inolvidables!
        </p>
      </div>
    </div>
  );
};
