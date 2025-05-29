import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarAdmin from "../../componentes/navbarAdmin";
import { Loader2 } from "lucide-react";

const HotelesAdmin = () => {
  const navigate = useNavigate();
  //const host = "https://backend-empresariales.onrender.com/";
  const host = "http://localhost:8080/";
  const [hoteles, setHoteles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    navigate("/iniciar-sesion");
  };

  useEffect(() => {
    const fetchDatosHoteles = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${host}api/hotel/todos`);
        setHoteles(response.data);
      } catch (error) {
        console.error("Error fetching hoteles:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDatosHoteles();
  }, []);

  const handleDelete = async (hotelId) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este hotel?");
    if (confirmDelete) {
      try {
        setIsLoading(true);
        const response = await axios.delete(`${host}api/hotel/eliminar/${hotelId}`);
        console.log(response);
        
        if (response.status === 200) {
          alert("Hotel eliminado exitosamente.");
          setHoteles(hoteles.filter((hotel) => hotel.id !== hotelId));
        } else {
          alert("Hubo un error al eliminar el hotel.");
        }
      } catch (error) {
        console.error("Error al eliminar el hotel:", error);
        alert("Hubo un error al eliminar el hotel.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-orange-300 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Cargando hoteles...</p>
        </div>
      </div>
    );
  }

  return (
   <div className="min-h-screen flex flex-col bg-gray-50">
  {/* Header */}
  <NavbarAdmin />

  {/* Main Content */}
  <main className="flex-1 p-8">
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Gestión de Hoteles</h1>
        <Link
          to="/hotel-crear"
          className="bg-orange-300 hover:bg-orange-300 text-white font-medium py-2 px-4 rounded-lg shadow-md transition"
        >
          + Agregar Hotel
        </Link>
      </div>
      <div className="bg-white shadow-lg rounded-lg">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-orange-300 text-white">
              <th className="py-3 px-6 text-left text-sm font-semibold">ID</th>
              <th className="py-3 px-6 text-left text-sm font-semibold">Nombre</th>
              <th className="py-3 px-6 text-left text-sm font-semibold">Descripción</th>
              <th className="py-3 px-6 text-left text-sm font-semibold">Dirección</th>
              <th className="py-3 px-6 text-left text-sm font-semibold">URL Imagen</th>
              <th className="py-3 px-6 text-left text-sm font-semibold">Puntaje</th>
              <th className="py-3 px-6 text-center text-sm font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {hoteles.map((hotel) => (
              <tr
                key={hotel.id}
                className="border-t hover:bg-gray-100 transition"
              >
                <td className="py-4 px-6 text-sm text-gray-700">{hotel.id}</td>
                <td className="py-4 px-6 text-sm text-gray-700">{hotel.nombre}</td>
                <td className="py-4 px-6 text-sm text-gray-700">{hotel.descripcion}</td>
                <td className="py-4 px-6 text-sm text-gray-700">{hotel.direccion}</td>
                <td className="py-4 px-6 text-sm text-gray-700">{hotel.urlImagen}</td>
                <td className="py-4 px-6 text-sm text-gray-700">{hotel.puntaje}</td>
                <td className="py-4 px-6 text-sm text-center space-x-2 flex flex-row justify-center items-center">
                  <Link
                    to={`/hotel-crear/${hotel.id}`}
                    className="bg-green-500 hover:bg-green-400 text-white py-1 px-3 rounded-lg transition"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => handleDelete(hotel.id)}
                    className="bg-red-500 hover:bg-red-400 text-white py-1 px-3 rounded-lg transition"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </main>

  {/* Footer */}
  <footer className="bg-green-300 text-white text-center py-4 mt-auto">
    <p>&copy; 2025 - Trabajo empresariales</p>
  </footer>
</div>

  );
};

export default HotelesAdmin;