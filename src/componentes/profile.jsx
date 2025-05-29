import "../styles/profile.css";
import { BarMenu } from "./barMenu";
import { useState } from "react";

export const Profile = () => {

    const datos = JSON.parse(localStorage.getItem('usuario'));
    const url = "http://localhost:8080/usuario/" + datos.id;  

    //console.log(datos);S

    const [usuario, setUsuario] = useState({
        nombre: datos.nombre,
        telefono: datos.telefono,
        correoElectronico: datos.correoElectronico,
        contra: datos.contra
      });

    async function actualizarUsu() {

        try {
            const respuesta = await fetch(url, {
                method : "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            });

            const usuarioActualizado = await respuesta.json();

            //console.log(usuarioActualizado);

            localStorage.removeItem('usuario');

            localStorage.setItem('usuario', JSON.stringify(usuarioActualizado));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="d-flex">

            {/*BARRA PAL PERFIL */}
            <BarMenu />

            <div className="container form-perfil">
                <h2 className="m-4">Mi Información Básica</h2>
                <form className="form">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" placeholder={usuario.nombre} onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tel" className="form-label">Telefono</label>
                        <input type="number" className="form-control" id="tel" maxLength={10} placeholder={usuario.telefono} onChange={(e) => setUsuario({ ...usuario, telefono: e.target.value })}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo Electrónico</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" readOnly disabled value={usuario.correoElectronico} onChange={(e) => setUsuario({ ...usuario, correoElectronico: e.target.value })}/>
                        <div id="emailHelp" className="form-text">El Email no se puede modificar.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contra" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="contra" placeholder={usuario.contra} onChange={(e) => setUsuario({ ...usuario, contra: e.target.value })}/>
                    </div>
                    
                    <br />
                    <br />

                    <button className="btn btn-success" onClick={(e) => {
                        e.preventDefault();

                        actualizarUsu();
                    }}>Actualizar Datos</button>
                    <button className="btn btn-danger">Cancelar</button>
                </form>
            </div>
        </main>
    );
}