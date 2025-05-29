import { Footer } from "../footer/footer";
import { Navegation  } from "../componentes/navigator";
import { useState, useEffect } from "react";
import CC1 from "../assets/restaurante-1.jpg";
import CC2 from "../assets/restaurante-2.jpg";
import CC3 from "../assets/restaurante-3.jpg";
import CC4 from "../assets/restaurante-4.jpg";
import CC5 from "../assets/restaurante-5.jpg";
import CC6 from "../assets/restaurante-6.jpg";
import CC7 from "../assets/restaurante-7.jpg";
import { useNavigate } from "react-router-dom";

export const Restaurants = () => {
  const imagenes = [CC1, CC2, CC3, CC4, CC5, CC6, CC7];
  const url = "http://localhost:8080/restaurante/"; 
  const [datos, setDatos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function mostrarRestaurantes() {
      try {
        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        const datosJson = await response.json();
  
        //console.log(datosJson);
        setDatos(datosJson);
      } catch (error) {
        console.log(error);
      }
    }
  
    mostrarRestaurantes();
  }, []);

  const handleClick = (element) => {
    // Redirigir a la ruta con el objeto como parámetro
    navigate('/nombre-info',  { state: { object: element }} );
  };

  return (
    <>
      <div>
        <Navegation />
      </div>
      <main>
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

              {datos.map((e) => {

                return (
                  <div className="col"  key={e.id}>
                    <div className="card shadow-sm">
                      <img
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="225"
                        src={imagenes[Math.round(Math.random() * 6)]}
                      />
                      <div className="card-body">
                        <h4>{e.nombre}</h4>
                        <p className="card-text">{e.descripcion}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary m-1"
                            >
                              {e.menu}
                            </button>
                            <button
                              className="btn btn-sm btn-outline-primary m-1"
                              onClick={() => {
                                handleClick(e);
                              }}
                            >
                              Echar un vistazo
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
};
