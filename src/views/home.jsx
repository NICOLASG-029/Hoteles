import { Footer } from "../footer/footer.jsx";
import { Navegation } from "../componentes/navigator.jsx";

export const Home = () => {
 return (
  <>
    <Navegation />
    <div>
      {/* QUIÉNES SOMOS */}
      <div className="flex flex-col md:flex-row justify-between items-center py-10 md:py-20 px-4 md:px-20 lg:px-44 w-full bg-orange-50">
        <div className="p-5 md:w-1/2 flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-4 text-orange-700">¿Quiénes Somos?</h1>
          <p className="text-orange-800 mb-4 font-medium">
            Descubre una Experiencia Gastronómica Inolvidable.
          </p>
          <p className="text-orange-800">
            Somos una plataforma dedicada a facilitar la búsqueda y reservación de hoteles ideales para cada viajero. Desde escapadas románticas hasta aventuras familiares, trabajamos para conectar a nuestros usuarios con una amplia variedad de opciones de hospedaje en destinos soñados.
          </p>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2">
          <img
            className="rounded-3xl h-auto max-h-80 md:max-h-full object-cover shadow-lg border-4 border-orange-100"
            src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="imagen-copa-cubiertos-restaurante"
          />
        </div>
      </div>

      {/* SERVICIOS */}
      <div className="flex flex-col justify-center w-full px-4 md:px-20 lg:px-44 my-16">
        <h2 className="text-3xl font-bold mb-8 text-orange-700 text-center">Servicios</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            {
              title: "Reservación",
              description:
                "Accede a una amplia selección de hoteles en todo el mundo y realiza reservas instantáneas de forma segura.",
            },
            {
              title: "Filtros",
              description:
                "Busca hoteles según tus necesidades: ubicación, precio, servicios incluidos, clasificación por estrellas, y más.",
            },
            {
              title: "Ofertas",
              description:
                "Aprovecha descuentos especiales y paquetes únicos solo disponibles en nuestra plataforma.",
            },
            {
              title: "Pagos Flexibles",
              description:
                "Paga en línea con métodos seguros o selecciona opciones como pagos a plazos o al llegar al hotel.",
            },
          ].map((servicio, index) => (
            <li key={index} className="bg-orange-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all">
              <h3 className="font-bold text-xl mb-2 text-orange-700">{servicio.title}</h3>
              <p className="text-orange-800">{servicio.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* DESCUBRE NUESTROS HOTELES */}
      <div className="px-4 md:px-20 lg:px-44 py-16">
        <h1 className="text-3xl font-bold mb-8 text-orange-700 text-center">Descubre nuestros hoteles</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "BOUTIQUE",
              description:
                "Disfruta de una experiencia gastronómica única en nuestro restaurante elegante. Nuestro menú cuidadosamente seleccionado y ambiente sofisticado te esperan.",
              image:
                "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
            },
            {
              title: "NEGOCIOS",
              description:
                "Diseñados para viajeros corporativos, con servicios como salas de reuniones, conexión Wi-Fi de alta velocidad y ubicaciones estratégicas cerca de centros empresariales o aeropuertos.",
              image:
                "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
            {
              title: "TODO INCLUIDO",
              description:
                "Perfectos para quienes quieren disfrutar sin preocuparse por los detalles. Incluyen alojamiento, comidas, bebidas y actividades recreativas en un solo paquete.",
              image:
                "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
          ].map((hotel, index) => (
            <div
              key={index}
              className="bg-cover bg-center h-96 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url('${hotel.image}')` }}
            >
              <div className="p-6 h-full rounded-3xl flex flex-col justify-end">
                <h3 className="text-white text-2xl font-bold">{hotel.title}</h3>
                <p className="text-orange-100 mt-2">{hotel.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  </>
);
};
