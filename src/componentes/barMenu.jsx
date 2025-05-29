import { Link } from "react-router-dom";

export const BarMenu = () => {

    const { nombre } = JSON.parse(localStorage.getItem('usuario'));

    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark barra-perfil">
                <span className="fs-5 text-center">RoomRadar</span>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-white" aria-current="page">
                    <svg className="bi pe-none me-2" width="16" height="16"><i className="fa-solid fa-house"></i></svg>
                    Home
                    </Link>
                </li>
                <li>
                    <Link to="/perfil" className="nav-link text-white">
                    <svg className="bi pe-none me-2" width="16" height="16"></svg>
                    Perfil
                    </Link>
                </li>
                <li>
                    <Link to="/privacidad" className="nav-link text-white">
                    <svg className="bi pe-none me-2" width="16" height="16"></svg>
                    Privacidad
                    </Link>
                </li>
                <li>
                    <Link to="/preferencias" className="nav-link text-white">
                    <svg className="bi pe-none me-2" width="16" height="16"></svg>
                    Preferencias
                    </Link>
                </li>
                <li>
                    <Link to="#" className="nav-link text-danger">
                    <svg className="bi pe-none me-2" width="16" height="16"></svg>
                    Cerrar Sesión
                    </Link>
                </li>
                </ul>
                <hr />
                <div>
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://img.freepik.com/vector-premium/icono-perfil-usuario-estilo-plano-ilustracion-vector-avatar-miembro-sobre-fondo-aislado-concepto-negocio-signo-permiso-humano_157943-15752.jpg?w=740" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>{nombre}</strong>
                    </a>
                </div>
            </div>
        </>
    );
}