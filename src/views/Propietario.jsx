import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Lista from '../componentes/Lista';

import { Navegation } from '../componentes/navigator';
import { Grafica } from '../componentes/grafica';
import { Estrellas } from '../componentes/Estrellas';

export default function Perfil() {
  const [profile, setProfile] = useState(null);
  const [resenas, setResenas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // const host = "https://backend-empresariales.onrender.com/";

  const host = "http://localhost:8080/";

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Get user profile from localStorage
        const storedProfile = localStorage.getItem('usuario');
        if (storedProfile) {
          setProfile(JSON.parse(storedProfile));
        }

        // Fetch reviews
        const reviewResponse = await axios.get(`${host}api/resena/todos`);
        setResenas(reviewResponse.data);
        console.log(reviewResponse);
        
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("No se pudo cargar la información del perfil");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleDeleteHotel = async (hotelId) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este hotel?");
    if (confirmDelete) {
      try {
        setIsLoading(true);
        const response = await axios.delete(`${host}api/hotel/eliminar/${hotelId}`);
        
        if (response.status === 200) {
          alert("Hotel eliminado exitosamente.");
          // Optionally, redirect or update UI
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
    return <div className="text-center mt-10">Cargando perfil...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }

  // Ensure we have data before rendering
  if (!resenas.length || !resenas[0]?.hotel) {
    return <div className="text-center mt-10">No se encontró información del hotel</div>;
  }

  const hotel = resenas[0].hotel;

  return (
    <div>
      <Navegation />
      
      <div className="bg-white rounded-lg p-6 shadow-lg m-4">
        <div className='flex lg:flex-row flex-col justify-around'>
          <div className='flex flex-col items-center'>
            <div className="mb-6 flex flex-col items-center">
              <h1 className='text-center text-xl mb-2 font-bold'>Mi hotel</h1>
              
              <img
                src={hotel.urlImagen}
                alt="Hotel Avatar"
                className="rounded-full w-32 h-32 object-cover mb-4"
              />
              
              <p className="text-gray-500"><span className='font-bold'>Mi cuenta</span></p>
              <h1 className="text-2xl font-bold text-gray-800">{hotel.nombre}</h1>
              <p className="text-gray-600 mb-4"><span className='font-bold'>Descripción: </span>{hotel.descripcion}</p>
              
              <div className='flex flex-row justify-center'>
                <Link 
                  to={"/hotel-crear/"+hotel.id} 
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-2 hover:bg-blue-600"
                >
                  Editar
                </Link>
                <button 
                  onClick={() => handleDeleteHotel(hotel.id)}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                >
                  Eliminar
                </button>
              </div>
            </div>
            
            <div>
              <Estrellas className="w-max" />
            </div>
          </div>
          
          <div className='lg:w-7/12 w-full'>
            <Grafica className="w-max" />
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
  <h2 className="text-xl text-center font-bold text-gray-800">Reseñas</h2>
  <div className="max-w-2xl mx-auto">
    {resenas.map((resena) => (
      <Lista 
        key={resena.id} 
        nombre={resena.usuario.nombre} 
        calificacion={resena.puntaje} 
        text={resena.descripcion} 
      />
    ))}
  </div>
</div>
    </div>
  );
}