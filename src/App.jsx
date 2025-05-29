import { Home } from './views/home';
import Hotel from './views/Hotel'
import Hoteles from './views/Hoteles'
import Perfil from './views/Perfil'
import { Register } from './views/Register';
import { Restaurants } from './componentes/restaurants';
import { Login } from './views/Login';
import { Routes, Route } from  'react-router-dom'
import { Profile } from './componentes/profile';
import { Privacy } from './componentes/privacy';
import { Preferences } from './componentes/preferences';
import { Contacto } from './componentes/contact';
import { MoreInfo } from './componentes/restInfo';
import "./App.css"
import CrearHotel from './views/CRUDs/CrearHoteles';
import Usuarios from './views/CRUDs/Usuarios';
import HotelesAdmin from './views/CRUDs/HotelesAdmin';
import Admin from './views/CRUDs/Admin';
import CrearUsuario from './views/CRUDs/CrearUsuario';
import Reservaciones from './views/CRUDs/Reservaciones';
import Propietario from './views/Propietario';
import Resenas from './views/CRUDs/Resenas';
import CrearResenas from './views/CRUDs/CrearResenas';
import CrearReserva from './views/CRUDs/CrearReserva';

export const App = () => {

    return(
        <>
            <Routes>
                <Route path="/admin" element={<Admin />}></Route>
                <Route path="/hotel-crear" element={<CrearHotel />}></Route>
                <Route path="/hotel-crear/:id" element={<CrearHotel />}></Route>
                <Route path="/admin-hotel" element={<HotelesAdmin />}></Route>
                <Route path="/usuario-crear" element={<CrearUsuario />}></Route>
                <Route path="/usuario-crear/:id" element={<CrearUsuario />}></Route>
                <Route path="/admin-usuario" element={<Usuarios />}></Route>
                <Route path="/reservaciones" element={<Reservaciones />}></Route>
                <Route path="/resenas" element={<Resenas />}></Route>
                <Route path="/resena-crear" element={<CrearResenas />}></Route>
                <Route path="/resena-crear/:id" element={<CrearResenas />}></Route>
                 <Route path="/reserva-crear" element={<CrearReserva />}></Route>
                <Route path="/reserva-crear/:id" element={<CrearReserva />}></Route>

                <Route path="/perfil" element={<Perfil />}></Route>
                <Route path="/hoteles" element={<Hoteles />}></Route>
                <Route path="/" element={<Home />}>
                </Route>
                <Route path='/iniciar-sesion' element={<Login />}>
                </Route>

                <Route path="/propietario" element={<Propietario />}></Route>

                <Route path='/hotel/:id' element={<Hotel />}>
                </Route>
                <Route path='/registrarse' element={<Register />}> 
                </Route>
                <Route path='/perfil' element={<Profile />}> 
                </Route>
                <Route path='/privacidad' element={<Privacy />}> 
                </Route>
                <Route path='/preferencias' element={<Preferences />}> 
                </Route>
                <Route path='/restaurantes' element={<Restaurants />}> 
                </Route>
                <Route path='/contacto' element={<Contacto />}> 
                </Route>
                <Route path='/nombre-info' element={<MoreInfo />}> 
                </Route>
            </Routes>
        </>
    );
}