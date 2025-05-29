import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CrearUsuario = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    correo: "",
    contrasena: "",
    tipoUsuario: "admin",
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
            id: data.id,
            nombre: data.nombre,
            correo: data.correo,
            contrasena: "",
            tipoUsuario: data.tipoUsuario,
          });
        } catch (error) {
          console.error("Error loading user data:", error);
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
      const url = id
        ? `${host}/api/usuario/editar`
        : `${host}/api/usuario/crear`;
      const method = id ? "PUT" : "POST";

      const response = await axios({
        method,
        url,
        headers: {
          "Content-Type": "application/json",
        },
        data: formData,
      });

      if (response.status === 200 || response.status === 201) {
        if (method === "PUT") {
          navigate("/perfil");
          localStorage.setItem("usuario", JSON.stringify(formData));
        } else {
          navigate("/usuarios");
        }
      } else {
        throw new Error("Error saving user");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 mx-auto">
      <h2 className="text-center text-2xl font-bold mb-6">
        {id ? "Editar Usuario" : "Crear Usuario"}
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre" className="block font-bold text-gray-700 mb-1">
          Nombre:
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
          placeholder="Nombre completo"
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <label htmlFor="correo" className="block font-bold text-gray-700 mb-1">
          Correo:
        </label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={formData.correo}
          onChange={handleInputChange}
          placeholder="Correo electrónico"
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <label
          htmlFor="contrasena"
          className="block font-bold text-gray-700 mb-1"
        >
          Contraseña:
        </label>
        <input
          type="password"
          id="contrasena"
          name="contrasena"
          value={formData.contrasena}
          onChange={handleInputChange}
          placeholder="Contraseña"
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <label
          htmlFor="tipoUsuario"
          className="block font-bold text-gray-700 mb-1"
        >
          Tipo de Usuario:
        </label>
        <select
          id="tipoUsuario"
          name="tipoUsuario"
          value={formData.tipoUsuario}
          onChange={handleInputChange}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="administrador">Admin</option>
          <option value="Usuario">Usuario</option>
          <option value="Propietario">Propietario</option>
        </select>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          {isLoading
            ? "Guardando..."
            : id
            ? "Actualizar Usuario"
            : "Guardar Usuario"}
        </button>
      </form>
    </div>
  );
};

export default CrearUsuario;
