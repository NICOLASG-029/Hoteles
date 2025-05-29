import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarAdmin from "../../componentes/navbarAdmin";
import { Loader2 } from "lucide-react";

const Resenas = () => {
  const navigate = useNavigate();
 // const host = "https://backend-empresariales.onrender.com";
 const host = "http://localhost:8080";
  const [resenas, setResenas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    navigate("/iniciar-sesion");
  };

  useEffect(() => {
    const fetchResenas = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${host}/api/resena/todos`);
        setResenas(response.data);
      } catch (error) {
        console.error("Error fetching reseñas:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchResenas();
  }, []);

  const handleDeleteResena = async (resenaId) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar esta reseña?");
    if (confirmDelete) {
      try {
        setIsLoading(true);
        const response = await axios.delete(`${host}/api/resena/eliminar/${resenaId}`);
        if (response.status === 200) {
          alert("Reseña eliminada exitosamente.");
          setResenas(resenas.filter((resena) => resena.id !== resenaId));
        } else {
          alert("Hubo un error al eliminar la reseña.");
        }
      } catch (error) {
        console.error("Error al eliminar la reseña:", error);
        alert("Hubo un error al eliminar la reseña.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-orange-100 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Cargando reseñas...</p>
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
            <h1 className="text-3xl font-semibold text-gray-800">Gestión de Reseñas</h1>
            <Link
              to="/resena-crear"
              className="bg-orange-300 hover:bg-orange-300 text-white font-medium py-2 px-4 rounded-lg shadow-md transition"
            >
              + Agregar Reseña
            </Link>
          </div>
          <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
            <table className="min-w-full border-collapse bg-white">
              <thead>
                <tr className="bg-orange-300 text-white">
                  <th className="py-3 px-6 text-left text-sm font-semibold">ID</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold">Descripción</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold">Puntaje</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold">Usuario</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold">Hotel</th>
                  <th className="py-3 px-6 text-center text-sm font-semibold">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {resenas.map((resena) => (
                  <tr
                    key={resena.id}
                    className="border-t hover:bg-gray-100 transition"
                  >
                    <td className="py-4 px-6 text-sm text-gray-700">{resena.id}</td>
                    <td className="py-4 px-6 text-sm text-gray-700">{resena.descripcion}</td>
                    <td className="py-4 px-6 text-sm text-gray-700">{resena.puntaje}</td>
                    <td className="py-4 px-6 text-sm text-gray-700">{resena.usuario?.nombre || "Sin usuario"}</td>
                    <td className="py-4 px-6 text-sm text-gray-700">{resena.hotel?.nombre || "Sin hotel"}</td>
                    <td className="py-4 px-6 text-sm text-center space-x-2">
                      <Link
                        to={`/resena-crear/${resena.id}`}
                        className="bg-green-500 hover:bg-green-400 text-white py-1 px-3 rounded-lg transition"
                      >
                        Editar
                      </Link>
                      <button
                        onClick={() => handleDeleteResena(resena.id)}
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

export default Resenas;
