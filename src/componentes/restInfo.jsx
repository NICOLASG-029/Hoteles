import "../styles/restinfo.css";
import { Galeria } from "./galeria";
import { Navegation } from "../componentes/navigator";
import { Footer } from "../footer/footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import CC1 from "../assets/restaurante-1.jpg";
import CC2 from "../assets/restaurante-2.jpg";
import CC3 from "../assets/restaurante-3.jpg";
import CC4 from "../assets/restaurante-4.jpg";
import CC5 from "../assets/restaurante-5.jpg";
import CC6 from "../assets/restaurante-6.jpg";
import CC7 from "../assets/restaurante-7.jpg";

export const MoreInfo = () => {
  const imagenes = [CC1, CC2, CC3, CC4, CC5, CC6, CC7];
  let location = useLocation();
  const [ datos, setDatos] = useState({});
  

  useEffect(() => {
    if (location.state && Object.keys(location.state.object).length > 0) {
      setDatos(location.state.object);
    }
    
  }, [location.state]);

  console.log(datos);
  return (
    <div>
      <div>
        <Navegation />
      </div>
      <div className="restaurante-info">
        <div className="informacion">
          <img
            src={imagenes[Math.round(Math.random() * 6)]}
            alt="Logo del restaurante"
            className="logo"
          />
          <div>
            <h2>{datos.nombre}</h2>
            <p>{datos.direccion}</p>
            <p>Carta: {datos.menu}</p>
            {/* Puedes agregar más información aquí */}
          </div>
        </div>
        <div className="linea-separadora"></div>
        <div className="descripcion">
          <p>{datos.descripcion}</p>
        </div>
      </div>
      <Galeria />
      <div>
        <Footer />
      </div>
    </div>
  );
};
