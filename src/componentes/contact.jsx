import { Navegation } from "../componentes/navigator";
import { Footer } from "../footer/footer";

export const Contacto = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navegation />
      <div className="flex-grow bg-orange-50">
        {/* Imagen de fondo con encabezado */}
        <div
          className="relative h-64 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/2565222/pexels-photo-2565222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
            <div className="text-white px-8">
              <h1 className="text-5xl font-extrabold">CONTÁCTENOS</h1>
              <p className="mt-3 text-lg">
                Sugerencias, dudas incluso quejas, <br />
                <strong>¡Contáctanos ahora mismo!</strong>
              </p>
            </div>
          </div>
        </div>
        {/* Tarjetas de contacto */}
        <div className="container mx-auto py-12 px-4">
          <div className="flex gap-5 justify-center mx-auto">
            {/* Nicolas Garcia */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:scale-105 hover:ring-4 hover:ring-orange-300 transition-transform duration-300">
              <h2 className="text-2xl font-bold text-gray-800">
                Nicolas Garcia
              </h2>
              <p className="text-gray-700 mt-3">
                Estudiante de Tecnología en desarrollo de sistemas informáticos
                en las UTS.
              </p>
              <p className="mt-5 text-gray-600">
                Correo:{" "}
                <a
                  href="mailto:nicolasagarcia@uts.edu.co"
                  className="text-blue-600 underline hover:text-blue-800 transition-colors"
                >
                  nicolasagarcia@uts.edu.co
                </a>
              </p>
            </div>
            {/* Santiago Niño */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:scale-105 hover:ring-4 hover:ring-orange-300 transition-transform duration-300">
              <h2 className="text-2xl font-bold text-gray-800">
                Santiago Niño
              </h2>
              <p className="text-gray-700 mt-3">
                Estudiante de Tecnología en desarrollo de sistemas informáticos
                en las UTS.
              </p>
              <p className="mt-5 text-gray-600">
                Correo:{" "}
                <a
                  href="mailto:ysantiagonino@uts.edu.co"
                  className="text-blue-600 underline hover:text-blue-800 transition-colors"
                >
                  ysantiagonino@uts.edu.co
                </a>
              </p>
            </div>
          </div>
          {
            /* Usuarios y Contraseñas */
            <div className="mt-16">
              <h3 className="font-extrabold text-orange-600 text-3xl mb-6 text-center">
                Usuarios y Contraseñas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl shadow-xl p-8 hover:scale-105 hover:ring-4 hover:ring-orange-200 transition-transform duration-300">
                  <h4 className="text-xl font-semibold text-gray-800">
                    Nicolas Garcia
                  </h4>
                  <p className="text-gray-700 mt-3">Correo: nico@gmail.com</p>
                  <p className="text-gray-700 mt-1">Contraseña: 123456</p>
                  <p className="text-gray-500 mt-3">Tipo de usuario: Usuario</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 hover:scale-105 hover:ring-4 hover:ring-orange-200 transition-transform duration-300">
                  <h4 className="text-xl font-semibold text-gray-800">
                    Santiago Niño
                  </h4>
                  <p className="text-gray-700 mt-3">
                    Correo: santiago@gmail.com
                  </p>
                  <p className="text-gray-700 mt-1">Contraseña: 123456</p>
                  <p className="text-gray-500 mt-3">
                    Tipo de usuario: Propietario
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 hover:scale-105 hover:ring-4 hover:ring-orange-200 transition-transform duration-300">
                  <h4 className="text-xl font-semibold text-gray-800">Admin</h4>
                  <p className="text-gray-700 mt-3">Correo: admin@gmail.com</p>
                  <p className="text-gray-700 mt-1">Contraseña: 1234567</p>
                  <p className="text-gray-500 mt-3">
                    Tipo de usuario: Administrador
                  </p>
                </div>
              </div>
            </div>
          }

        </div>
      </div>
      <Footer />
    </div>
  );
};
