import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NavbarAdmin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("usuario"); // Remove user data
    navigate("/iniciar-sesion"); // Redirect to login
  };

  return (
    <header className="bg-gradient-to-r from-orange-300 to-green-300 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-12 h-12 bg-white rounded-full shadow-md flex justify-center items-center">
            <span className="text-indigo-500 font-bold text-xl">A</span>
          </div>
          <h1 className="ml-3 text-white font-semibold text-lg tracking-wide">
            Admin Panel
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
        <Link
            to="/resenas"
            className="text-white font-medium hover:text-indigo-200 transition-transform transform hover:scale-105"
          >
            RESEÑAS
          </Link>
          <Link
            to="/admin-usuario"
            className="text-white font-medium hover:text-indigo-200 transition-transform transform hover:scale-105"
          >
            USUARIOS
          </Link>
          <Link
            to="/reservaciones"
            className="text-white font-medium hover:text-indigo-200 transition-transform transform hover:scale-105"
          >
            RESERVACIONES
          </Link>
          <Link
            to="/admin-hotel"
            className="text-white font-medium hover:text-indigo-200 transition-transform transform hover:scale-105"
          >
            HOTELES
          </Link>
        </nav>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-400 text-white font-medium py-2 px-4 rounded-full shadow-md transition-transform transform hover:scale-105"
        >
          Cerrar sesión
        </button>
      </div>
    </header>
  );
}
