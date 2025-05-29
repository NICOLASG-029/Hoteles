import React, { useState, useEffect } from "react";
import CartHoteles from "../componentes/CartHoteles";
import Lista from "../componentes/Lista";
import { Navegation } from "../componentes/navigator";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Perfil() {
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem("usuario")));
  const [resenas, setResenas] = useState([]);
  const [reservas, setReservas] = useState([]);
 // const host = "https://backend-empresariales.onrender.com";
const host = "http://localhost:8080";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = profile?.id;

        // Consultar reseñas del usuario
        const resenaResponse = await axios.get(`${host}/api/resena/todas/usuario/${userId}`);
        setResenas(resenaResponse.data);

        // Consultar historial de reservas
        const reservaResponse = await axios.get(`${host}/api/reserva/todas/${userId}`);
        setReservas(reservaResponse.data);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    };

    if (profile?.id) {
      fetchData();
    }
  }, [profile]);

  if (!profile) {
    return <p>Cargando perfil...</p>;
  }

  return (
    <div className="">
      <Navegation />
      {/* Render User Profile */}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <div className="m-6 w-full justify-evenly flex flex-row items-center border rounded-lg py-4">
          <div>
            <img
              src="https://w7.pngwing.com/pngs/932/836/png-transparent-person-miscellaneous-face-head-thumbnail.png"
              alt="Avatar"
              className="rounded-full w-32 h-32 object-cover mb-4"
            />
            <Link to={"/usuario-crear/"+profile.id} className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-2 hover:bg-blue-600">
              Editar
            </Link>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
              Eliminar
            </button>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-500">Mi cuenta</p>
            <h1 className="text-2xl font-bold text-gray-800">{profile.nombre}</h1>
            <p className="text-gray-600">Correo: {profile.correo}</p>
            <p className="text-gray-600 mb-4">Rol: {profile.tipoUsuario}</p>
                      <p className="text-gray-600 mb-4">ID: {profile.id}</p>
          </div>
        </div>

        {/* Historial de Hoteles */}
        <div className="flex sm:flex-row sm:justify-around flex-col">
        <div className="mt-6 sm:w-1/3">
          <h2 className="text-xl font-bold text-gray-800 text-center">Historial de Hoteles</h2>
          {reservas.length > 0 ? (
            reservas.map((reserva, index) => (
              <CartHoteles
                key={index}
                imagen={reserva.hotel.urlImagen}
                nombre={reserva.hotel?.nombre || "Hotel Desconocido"}
                descripcion={reserva.hotel?.descripcion || "Sin descripción"}
                calificacion={reserva.hotel?.puntaje || "N/A"}
              />
            ))
          ) : (
            <p className="text-gray-600">No se encontraron reservas.</p>
          )}
        </div>

        {/* Historial de Reseñas */}
        <div className="mt-6 w-1/3">
          <h2 className="text-xl font-bold text-gray-800 text-center">Historial de Reseñas</h2>
          {resenas.length > 0 ? (
            resenas.map((resena, index) => (
              <Lista
                key={index}
                nombre={resena.usuario?.nombre || "Usuario Anónimo"}
                text={resena.descripcion}
                calificacion={resena.puntaje}
              />
            ))
          ) : (
            <p className="text-gray-600">No se encontraron reseñas.</p>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}
