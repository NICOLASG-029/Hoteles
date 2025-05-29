import React, { useEffect, useState } from 'react';
import { Navegation } from '../componentes/navigator';
import CartHoteles from '../componentes/CartHoteles';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Loader2 } from "lucide-react";

export default function Hoteles() {
 // const host = "https://backend-empresariales.onrender.com/";
  const host = "http://localhost:8080/";
  const [datosHoteles, setDatosHoteles] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [hotelesFiltrados, setHotelesFiltrados] = useState(datosHoteles);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const fetchDatosHoteles = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${host}api/hotel/todos`);
        console.log(response.data);
        setDatosHoteles(response.data);
        setHotelesFiltrados(response.data);
      } catch (error) {
        console.error("Error fetching hoteles:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDatosHoteles();
  }, []);



  const manejarBusqueda = (e) => {
    const texto = e.target.value.toLowerCase();
    setBusqueda(texto);
    const filtrados = datosHoteles.filter((hotel) =>
      hotel.nombre.toLowerCase().includes(texto) ||
      hotel.descripcion.toLowerCase().includes(texto)
    );
    setHotelesFiltrados(filtrados);
  };

/*
//Solucion temporal
  const hoteles = [
  {
    id: 1,
    urlImagen: "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    nombre: "Hotel Costa Azul",
    descripcion: "Ubicado frente al mar, con vista panorámica y acceso directo a la playa.",
    puntaje: 4.7
  },
  {
    id: 2,
    urlImagen: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
    nombre: "Montaña Mágica Resort",
    descripcion: "Rodeado de naturaleza, ideal para desconectarse y relajarse en la montaña.",
    puntaje: 4.5
  },
  {
    id: 3,
    urlImagen: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    nombre: "Hotel Central Plaza",
    descripcion: "Moderno y ubicado en el corazón de la ciudad, cerca de centros comerciales.",
    puntaje: 4.2
  },
  {
    id: 4,
    urlImagen: "https://images.pexels.com/photos/261388/pexels-photo-261388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    nombre: "Eco Lodge Paraíso",
    descripcion: "Alojamiento ecológico con instalaciones sostenibles y comida orgánica.",
    puntaje: 4.9
  },
  {
    id: 5,
    urlImagen: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    nombre: "Hotel de Lujo Aurora",
    descripcion: "Experiencia 5 estrellas con spa, piscina infinita y restaurante gourmet.",
    puntaje: 5.0
  },
  {
    id: 6,
    urlImagen: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    nombre: "Hotel de La Sabaneta",
    descripcion: "Un lugar acogedor, rodeado de naturaleza, ideal para desconectar y disfrutar de la tranquilidad al aire libre.",
    puntaje: 4.9 
  }
];

setTimeout(() => {
  setIsLoading(false);
  setHotelesFiltrados(hoteles)
}, 2000);
*/

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navegation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Cargando hoteles...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navegation />
      <div className="container mx-auto px-3 py-3 my-6 bg-orange-100">
        <div className="my-4">
          <input
            type="text"
            placeholder="Buscar hoteles..."
            value={busqueda}
            onChange={manejarBusqueda}
            className="w-full p-2 border rounded-lg"
          />
        </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {hotelesFiltrados.length > 0 ? (
    hotelesFiltrados.map((hotel) => (
      <Link
        to={"/hotel/"+hotel.id}
        key={hotel.id}
        className="transition-transform transform hover:scale-105 hover:shadow-xl hover:shadow-orange-300"
      >
        <CartHoteles
          imagen={hotel.urlImagen}
          nombre={hotel.nombre}
          descripcion={hotel.descripcion}
          calificacion={hotel.puntaje}
        />
      </Link>
    ))
  ) : (
    <p className="text-center text-gray-600 col-span-full">No se encontraron resultados.</p>
  )}
</div>
      </div>
    </div>
  );
}