import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CrearHotel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    descripcion: "",
    direccion: "",
    urlImagen: "",
    puntaje: "",
  });
  //  const host = "https://backend-empresariales.onrender.com";
  const host = "http://localhost:8080";
  useEffect(() => {
    const fetchHotelData = async () => {
      if (id) {
        try {
          setIsLoading(true);
          const response = await axios.get(host + `/api/hotel/${id}`);
          const data = response.data;
          setFormData({
            id: data.id,
            nombre: data.nombre,
            descripcion: data.descripcion,
            direccion: data.direccion,
            urlImagen: data.urlImagen,
            puntaje: data.puntaje,
          });
        } catch (error) {
          console.error("Error al cargar el hotel:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchHotelData();
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
      const url = id ? host + `/api/hotel/editar` : host + "/api/hotel/crear";
      const method = id ? "PUT" : "POST";
      console.log(formData);
      if (method === "POST") {
        delete formData.id;
      }
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error al guardar el hotel");
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
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          {id ? "Editar Hotel" : "Crear Hotel"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="hotel-name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="hotel-name"
              name="nombre" // Cambiado para coincidir con el estado
              value={formData.nombre}
              onChange={handleInputChange}
              placeholder="Nombre del hotel"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="hotel-description"
              className="block text-sm font-medium text-gray-700"
            >
              Descripción:
            </label>
            <textarea
              id="hotel-description"
              name="descripcion" // Cambiado para coincidir con el estado
              value={formData.descripcion}
              onChange={handleInputChange}
              placeholder="Descripción del hotel"
              rows="3"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="hotel-address"
              className="block text-sm font-medium text-gray-700"
            >
              Dirección:
            </label>
            <input
              type="text"
              id="hotel-address"
              name="direccion" // Cambiado para coincidir con el estado
              value={formData.direccion}
              onChange={handleInputChange}
              placeholder="Dirección del hotel"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="hotel-url"
              className="block text-sm font-medium text-gray-700"
            >
              URL de Imagen:
            </label>
            <input
              type="url"
              id="hotel-url"
              name="urlImagen" // Cambiado para coincidir con el estado
              value={formData.urlImagen}
              onChange={handleInputChange}
              placeholder="URL de la imagen del hotel"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="hotel-rating"
              className="block text-sm font-medium text-gray-700"
            >
              Puntaje:
            </label>
            <input
              type="number"
              id="hotel-rating"
              name="puntaje" // Cambiado para coincidir con el estado
              value={formData.puntaje}
              onChange={handleInputChange}
              min="0"
              max="5"
              step="0.1"
              placeholder="Puntaje (0-5)"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white font-medium py-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-indigo-300"
          >
            {isLoading
              ? "Guardando..."
              : id
              ? "Actualizar Hotel"
              : "Guardar Hotel"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CrearHotel;
