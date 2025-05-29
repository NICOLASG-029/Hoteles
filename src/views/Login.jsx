import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

export const Login = () => {
    const navigate = useNavigate();

    // Estados para gestionar el formulario
    const [inputCorreo, setInputCorreo] = useState("");
    const [inputContra, setInputContra] = useState("");
    const [tipoUsuario, setTipoUsuario] = useState("");
    const [errorMensaje, setErrorMensaje] = useState("");

    // const url = "https://backend-empresariales.onrender.com/login";
    const url = "http://localhost:8080/login";

    // Manejar los cambios en los inputs
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setErrorMensaje(""); // Restablecer el mensaje de error al cambiar un input

        if (id === "correo") setInputCorreo(value);
        if (id === "password") setInputContra(value);
    };

    const handleSelectChange = (e) => setTipoUsuario(e.target.value);

    // Validar el formulario antes de enviarlo
    const validarFormulario = () => {
        if (!inputCorreo || !inputContra || !tipoUsuario) {
            setErrorMensaje("Por favor, completa todos los campos.");
            return false;
        }
        return true;
    };

    // Manejar el envío del formulario
    const envioSesion = async (e) => {
        e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

        if (!validarFormulario()) return;

        const datosSesion = {
            email: inputCorreo,
            password: inputContra,
            tipoUsuario: tipoUsuario
        };
        console.log(datosSesion)

        try {
            const respuesta = await axios.post(url,datosSesion, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
console.log(respuesta)
            const datos = respuesta.data;
            localStorage.setItem("usuario", JSON.stringify(datos));
            if(tipoUsuario=='Administrador'){
                navigate("/admin"); // Redirigir al usuario
            }else if(tipoUsuario=='Propietario'){
                navigate("/propietario"); // Redirigir al usuario
            }else{
                navigate("/"); // Redirigir al usuario
            }
        } catch (error) {
            console.error("Error en el inicio de sesión:", error);
            if (error.response?.status === 401) {
                setErrorMensaje("El correo o la contraseña son incorrectos.");
            } else if (error.response?.status === 401) {
                setErrorMensaje("El correo o la contraseña son incorrectos."); }
            else{
            setErrorMensaje("Hubo un problema con el servidor. Intenta de nuevo más tarde.");
            }
        }
    };

     return (
        <section className="flex flex-row w-full h-screen">
            {/* Formulario */}
            <div className="flex flex-col justify-center items-center w-2/3 bg-orange-100">
                <form
                    className="flex flex-col gap-6 bg-white w-full max-w-md p-10 rounded-2xl shadow-xl ring-1 ring-gray-200"
                    onSubmit={envioSesion}
                >
                    <h2 className="text-3xl font-extrabold text-center text-orange-800">Iniciar Sesión</h2>

                    <div className="flex flex-col">
                        <label htmlFor="correo" className="mb-1 text-gray-700 font-semibold">Correo Electrónico:</label>
                        <input
                            type="email"
                            id="correo"
                            className="w-full p-3 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-orange-900 focus:border-transparent placeholder-gray-400 transition"
                            placeholder="Ingresa tu correo electrónico"
                            value={inputCorreo}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="mb-1 text-gray-700 font-semibold">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-3 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-orange-900 focus:border-transparent placeholder-gray-400 transition"
                            placeholder="Ingresa tu contraseña"
                            value={inputContra}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="tipoUsuario" className="mb-1 text-gray-700 font-semibold">Selecciona el rol:</label>
                        <select
                            id="tipoUsuario"
                            className="w-full p-3 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-orange-900 focus:border-transparent transition"
                            value={tipoUsuario}
                            onChange={handleSelectChange}
                        >
                            <option value="">Selecciona el rol</option>
                            <option value="Administrador">Administrador</option>
                            <option value="Usuario">Usuario</option>
                            <option value="Propietario">Propietario</option>
                        </select>
                    </div>

                    {errorMensaje && (
                        <small className="text-red-600">{errorMensaje}</small>
                    )}

                    <button
                        type="submit"
                        className="bg-orange-700 hover:bg-orange-800 p-3 text-white rounded-lg font-semibold shadow-md transition hover:ring-4 hover:ring-orange-200"
                    >
                        Iniciar Sesión
                    </button>

                    <p className="text-center text-gray-600">
                        ¿No tienes cuenta? -{" "}
                        <Link className="text-orange-700 font-bold underline hover:text-orange-900" to="/registrarse">
                            Regístrate ahora
                        </Link>
                    </p>
                </form>
            </div>

            {/* Imagen */}
            <div className="h-screen bg-orange-200">
                <img
                    src="https://images.pexels.com/photos/7820321/pexels-photo-7820321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="h-screen rounded-l-full"
                    alt="comida-restaurante"
                />
            </div>
        </section>
    );
};
