import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import NavbarAdmin from "../../componentes/navbarAdmin";

const Admin = () => {
      const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("usuario");  // Or any specific item key used for user data
    navigate("/iniciar-sesion")
  };
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Header */}
      <NavbarAdmin />

      {/* Main Content */}
      <main className="flex flex-col items-center flex-1 text-center p-6">
        <h1 className="text-2xl font-bold mb-8">Bienvenido Administrador</h1>
        <div className="flex justify-center space-x-8">
          {/* Card Usuarios */}
          <Link to="/admin-usuario" className="bg-orange-200 w-48 h-48 rounded-lg shadow-lg flex flex-col items-center justify-center text-white hover:scale-105 hover:shadow-xl transition">
            <div
              className="w-20 h-20 mb-4 bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://cdn-icons-png.flaticon.com/128/14886/14886129.png')",
              }}
            ></div>
            <p className="font-bold">USUARIOS</p>
          </Link>

          {/* Card Hoteles */}
          <Link to="/admin-hotel" className="bg-orange-200 w-48 h-48 rounded-lg shadow-lg flex flex-col items-center justify-center text-white hover:scale-105 hover:shadow-xl transition">
            <div
              className="w-20 h-20 mb-4 bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://cdn-icons-png.flaticon.com/128/2946/2946876.png')",
              }}
            ></div>
            <p className="font-bold">HOTELES</p>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-300 text-white text-center py-4">
        <p>Ingreso al Administrador, Correctamente!</p>
      </footer>
    </div>
  );
};

export default Admin;
