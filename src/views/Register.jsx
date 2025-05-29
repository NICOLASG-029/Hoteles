import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import axios from 'axios';

export const Register = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    contrasena: '',
    tipoUsuario: 'usuario',
  });

 // const host = "https://backend-empresariales.onrender.com";
const host = "http://localhost:8080";

  useEffect(() => {
    const fetchUserData = async () => {
      if (id) {
        try {
          setIsLoading(true);
          const response = await axios.get(`${host}/api/usuario/${id}`);
          const data = response.data;
          setFormData({
            nombre: data.nombre,
            telefono: data.telefono,
            correo: data.correoElectronico,
            contrasena: '',
            tipoUsuario: data.rol || 'usuario',
          });
        } catch (error) {
          console.error('Error loading user data:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchUserData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const url = id ? `${host}/api/usuario/editar` : `${host}/api/usuario/crear`;
      const method = id ? 'PUT' : 'POST';
      
      const response = await axios({
        method,
        url,
        headers: {
          'Content-Type': 'application/json',
        },
        data: formData,
      });

      if (response.status === 200 || response.status === 201) {
        navigate('/iniciar-sesion');
      } else {
        throw new Error('Error saving user');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 "></div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('https://www.atrapalo.com.co/hoteles/picture/l/6756/0/1/299984022.jpg')]">
      <div className="flex justify-center items-center h-full w-full bg-orange-100 backdrop-blur-sm">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 p-10 w-11/12 md:w-1/2 bg-white/90 rounded-2xl shadow-lg shadow-gray-400 ring-1 ring-gray-300"
        >
          <h1 className="text-3xl font-extrabold text-center text-gray-800">{id ? 'Editar Usuario' : 'Registro de usuarios'}</h1>

          <div>
            <label htmlFor="nombre" className="text-gray-700 font-semibold">Nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre de usuario"
              value={formData.nombre}
              onChange={handleInputChange}
              className="w-full p-3 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-900 focus:border-transparent placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor="correo" className="text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              name="correo"
              id="correo"
              placeholder="Correo electrónico"
              value={formData.correo}
              onChange={handleInputChange}
              className="w-full p-3 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-900 focus:border-transparent placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor="telefono" className="text-gray-700 font-semibold">Teléfono</label>
            <input
              type="number"
              name="telefono"
              id="telefono"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={handleInputChange}
              className="w-full p-3 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-900 focus:border-transparent placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor="contrasena" className="text-gray-700 font-semibold">Contraseña</label>
            <input
              type="password"
              name="contrasena"
              id="contrasena"
              placeholder="Contraseña"
              value={formData.contrasena}
              onChange={handleInputChange}
              className="w-full p-3 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-900 focus:border-transparent placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor="tipoUsuario" className="text-gray-700 font-semibold">tipo Usuario</label>
            <select
              name="tipoUsuario"
              id="tipoUsuario"
              value={formData.tipoUsuario}
              onChange={handleInputChange}
              className="w-full p-3 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-900 focus:border-transparent placeholder-gray-400"
            >
              <option value="Usuario">Usuario</option>
              <option value="Propietario">Propietario</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-orange-600 hover:bg-orange-700 p-3 rounded-lg text-white font-semibold shadow-md focus:outline-none focus:ring-4 focus:ring-orange-200"
          >
            {id ? 'Actualizar Usuario' : 'Registrarse'}
          </button>

          <p className="text-center text-gray-600">
            ¿Ya tienes una cuenta? - <Link className="text-orange-700 font-bold underline hover:text-orange-900" to="/iniciar-sesion">Iniciar Sesión</Link>
          </p>
        </form>
      </div>
    </div>
);
};
