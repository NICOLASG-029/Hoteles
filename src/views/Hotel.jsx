import React, { useEffect, useState } from 'react';
import Lista from '../componentes/Lista';
import { Navegation } from '../componentes/navigator';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Hotel() {
 // const host = "https://backend-empresariales.onrender.com/";
 const host = "http://localhost:8080/";
  const { id } = useParams();
  const [datosHotel, setDatosHotel] = useState(null);
  const [resenas, setResenas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  console.log(id);
  
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const resenasResponse = await axios.get(`${host}api/resena/todas/${id}`);
        const fetchedResenas = resenasResponse.data;
       console.log(resenasResponse);
       
        // Extract hotel data from the first review if available
        if (fetchedResenas.length > 0) {
          setDatosHotel(fetchedResenas[0].hotel);
        } else {
          setDatosHotel(null); // No reviews; hotel data is missing
        }

        setResenas(fetchedResenas);
      } catch (err) {
        setError("No se pudo cargar la información del hotel");
        console.error("Error al cargar los datos:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return (
      <>
        <Navegation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
            <p className="mt-4 text-gray-600 text-lg">Cargando información del hotel...</p>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navegation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center bg-red-50 p-6 rounded-lg">
            <p className="text-red-600 text-lg">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Intentar nuevamente
            </button>
          </div>
        </div>
      </>
    );
  }

  if (!datosHotel) {
    return (
      <>
        <Navegation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 text-lg">No se encontró información del hotel</p>
          </div>
        </div>
      </>
    );
  }

  const promedioResenas = resenas.length > 0 
    ? (resenas.reduce((acc, curr) => acc + curr.puntaje, 0) / resenas.length).toFixed(1)
    : 0;

  return (
    <>
      <Navegation />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contenedor del hotel */}
          <div className="w-full md:w-1/3">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src={datosHotel.urlImagen}
                  alt={`Vista del hotel ${datosHotel.nombre}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
                  {datosHotel.puntaje} ★
                </div>
              </div>
              
              <div className="p-6">
                <h1 className="text-2xl font-bold text-blue-700 mb-2">{datosHotel.nombre}</h1>
                <div className="flex items-center text-gray-500 mb-4">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {datosHotel.direccion}
                </div>
                
                <p className="text-gray-600 mb-6">{datosHotel.descripcion}</p>
                 <p><strong className="py-2 text-center w-full text-gray-600 mb-6">{datosHotel.id}</strong></p>
                
                <div className=" py-2 space-y-3 flex flex-col justify-center">
                  <Link to="/reserva-crear" className="w-full px-4 py-2 bg-blue-600 text-center  text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Reservar ahora
                  </Link>
                  <Link to="/resena-crear" className="block text-center text-blue-600 hover:text-blue-800 font-semibold">
                    Crear reseña
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contenedor de reseñas */}
          <div className="w-full md:w-2/3">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Comentarios</h2>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-blue-600 mr-2">{promedioResenas}</span>
                  <span className="text-gray-600">({resenas.length} reseñas)</span>
                </div>
              </div>

              {resenas.length > 0 ? (
                <div className="space-y-4">
                  {resenas.map((resena, index) => (
                    <Lista
                      key={index}
                      imagen="https://weremote.net/wp-content/uploads/2022/08/mujer-sonriente-apunta-arriba.jpg"
                      nombre={resena.usuario?.nombre || 'Usuario Anónimo'}
                      text={resena.descripcion}
                      calificacion={resena.puntaje}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">Aún no hay reseñas para este hotel.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}