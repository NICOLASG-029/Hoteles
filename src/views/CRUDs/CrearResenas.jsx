import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CrearResena = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    descripcion: "",
    puntaje: 1,
    usuarioId: "",
    hotelId: "",
  });
 // const host = "https://backend-empresariales.onrender.com";
 const host = "http://localhost:8080";

  useEffect(() => {
    const fetchResenaData = async () => {
      if (id) {
        try {
          setIsLoading(true);
          const response = await axios.get(`${host}/api/resena/${id}`);
          const data = response.data;
          setFormData({
            id: data.id,
            descripcion: data.descripcion,
            puntaje: data.puntaje,
            usuarioId: data.usuario?.id || "",
            hotelId: data.hotel?.id || "",
          });
        } catch (error) {
          console.error("Error loading review data:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchResenaData();
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
      const url = id ? `${host}/api/resena/editar` : `${host}/api/resena/crear/${formData.hotelId}/${formData.usuarioId}`;
      const method = id ? "PUT" : "POST";
if (method == "POST") {
  delete formData.id;
}
      const response = await axios({
        method,
        url,
        headers: {
          "Content-Type": "application/json",
        },
        data: formData,
      });
      console.log(formData,method);
      

      if (response.status === 200 || response.status === 201) {
      if (JSON.parse(localStorage.getItem("usuario")).tipoUsuario == "Administrador") {
        navigate("/resenas");
       }else {
        navigate("/hoteles")
       }
        
      } else {
        throw new Error("Error saving review");
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
      <h2 className="text-center text-2xl font-bold mb-6">{id ? "Editar Reseña" : "Crear Reseña"}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="descripcion" className="block font-bold text-gray-700 mb-1">
          Descripción:
        </label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleInputChange}
          placeholder="Descripción de la reseña"
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <label htmlFor="puntaje" className="block font-bold text-gray-700 mb-1">
          Puntaje:
        </label>
        <input
          type="number"
          id="puntaje"
          name="puntaje"
          value={formData.puntaje}
          onChange={handleInputChange}
          min="1"
          max="5"
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {!id ? <label htmlFor="usuarioId" className="block font-bold text-gray-700 mb-1">Usuario ID:</label>: ''}
        {!id ? <input type="text" id="usuarioId" name="usuarioId" value={formData.usuarioId} onChange={handleInputChange} placeholder="ID del Usuario" required className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"/> : ''}
        

        {!id? <label htmlFor="hotelId" className="block font-bold text-gray-700 mb-1">Hotel ID: </label> : ''}
        {!id? <input type="text" id="hotelId" name="hotelId" value={formData.hotelId} onChange={handleInputChange} placeholder="ID del Hotel" required className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"/>: ''}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          {isLoading ? "Guardando..." : id ? "Actualizar Reseña" : "Guardar Reseña"}
        </button>
      </form>
    </div>
  );
};

export default CrearResena;
