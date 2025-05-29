import { Link, useNavigate  } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export const Navegation = () => {
  const [bandera, setBandera] = useState(true);
  const [nombre, setNombre] = useState('');
  const [usuario, setUsuario] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Referencia para el menú

  const navigate = useNavigate();
  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    if (usuario === null) {
      setBandera(false);
    } else {
      setNombre(usuario.nombre);
      setBandera(true);
      setUsuario(usuario)
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Cierra el menú si haces clic fuera
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function login() {
    return (
      <li className="nav-item">
        <Link className="nav-link text-orange-500 hover:text-blue-700" to="/iniciar-sesion">
          Login
        </Link>
      </li>
    );
  }
function loginActive() {

  if(usuario) {
    if(usuario.tipoUsuario == 'Propietario') {
    return (
          <li className="nav-item relative" ref={menuRef}>
            <button
              className="nav-link text-blue-500 hover:text-blue-700 flex items-center"
              onClick={() => setIsMenuOpen((prev) => !prev)} // Alterna el estado
            >
              {nombre}
              <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.04 0L10 10.94l3.73-3.73a.75.75 0 1 1 1.04 1.08l-4.5 4.5a.75.75 0 0 1-1.08 0l-4.5-4.5a.75.75 0 0 1 0-1.08z"
                />
              </svg>
            </button>
            {isMenuOpen && ( // Muestra el menú solo si isMenuOpen es true
              <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
                <li>
                  <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-100" to="/perfil">
                    Perfil
                  </Link>
                </li>
                      <li>
                  <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-100" to="/propietario">
                    Propietario
                  </Link>
                </li>
                <li>
                  <hr className="my-2" />
                </li>
                <li>
                  <button
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                    onClick={() => {
                      localStorage.removeItem('usuario');
                      
                      navigate("/iniciar-sesion"); // Redirect to login
                      location.reload();
                    }}
                  >
                    Cerrar Sesión
                  </button>
                </li>
              </ul>
            )}
          </li>
        );
      }
  }

    return (
      <li className="nav-item relative" ref={menuRef}>
        <button
          className="nav-link text-blue-500 hover:text-blue-700 flex items-center"
          onClick={() => setIsMenuOpen((prev) => !prev)} // Alterna el estado
        >
          {nombre}
          <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 0 1 1.04 0L10 10.94l3.73-3.73a.75.75 0 1 1 1.04 1.08l-4.5 4.5a.75.75 0 0 1-1.08 0l-4.5-4.5a.75.75 0 0 1 0-1.08z"
            />
          </svg>
        </button>
        {isMenuOpen && ( // Muestra el menú solo si isMenuOpen es true
          <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
            <li>
              <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-100" to="/perfil">
                Perfil
              </Link>
            </li>
            <li>
              <hr className="my-2" />
            </li>
            <li>
              <button
                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                onClick={() => {
                  localStorage.removeItem('usuario');
                  
                  navigate("/iniciar-sesion"); // Redirect to login
                  location.reload();
                }}
              >
                Cerrar Sesión
              </button>
            </li>
          </ul>
        )}
      </li>
    );
    
  }

return (
  <nav className="bg-orange-100 shadow-md text-gray-800">
    <div className="container mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <img
          src="https://cdn-icons-png.freepik.com/512/694/694752.png"
          alt="Logo"
          className="w-12 h-12 rounded-full border-2 border-orange-300"
        />
        <h1 className="ml-3 text-xl font-bold text-orange-600">Bienvenido a RoomRadar</h1>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link className="text-gray-800 hover:text-orange-600 font-medium transition-colors" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-gray-800 hover:text-orange-600 font-medium transition-colors" to="/hoteles">
            Hoteles
          </Link>
        </li>
        <li>
          <Link className="text-gray-800 hover:text-orange-600 font-medium transition-colors" to="/contacto">
            Contacto
          </Link>
        </li>
        {bandera ? loginActive() : login()}
        <li>
          <Link className="text-gray-800 hover:text-orange-600 transition-colors" to="#">
            <svg className="w-6 h-6" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="32">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
};
