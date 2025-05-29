import React from 'react';

export default function CartHoteles({ imagen, nombre, descripcion, calificacion }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-lg">
      <div className="mb-4">
        <img
          src={imagen}
          alt={`Imagen de ${nombre}`}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <h2 className="text-xl font-bold mb-2">{nombre}</h2>
      <p className="text-gray-700 mb-2">{descripcion}</p>
      <p className="text-yellow-600 font-semibold">Calificación: {calificacion} ⭐</p>
    </div>
  );
}