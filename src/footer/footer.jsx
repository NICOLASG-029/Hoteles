import "../styles/footer.css";
//import fb from'../assets/facebook.png';
//import tw from'../assets/twitter.png';
//import insta from'../assets/instagram.png';

export const Footer = () => {
  return (
    <div className="footer bg-orange-100 text-orange-800">
      <div className="tk__footer section__padding">
        <div className="tk__footer-links grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="tk__footer-links-div">
            <h4 className="font-bold mb-2">Explora</h4>
            <a href="/destinos">
              <p>Destinos populares</p>
            </a>
            <a href="/ofertas">
              <p>Ofertas especiales</p>
            </a>
            <a href="/experiencias">
              <p>Experiencias únicas</p>
            </a>
          </div>

          <div className="tk__footer-links-div">
            <h4 className="font-bold mb-2">Recursos</h4>
            <a href="/ayuda">
              <p>Centro de ayuda</p>
            </a>
            <a href="/faq">
              <p>Preguntas frecuentes</p>
            </a>
            <a href="/blog">
              <p>Blog de viajes</p>
            </a>
          </div>

          <div className="tk__footer-links-div">
            <h4 className="font-bold mb-2">Partners</h4>
            <a href="/afiliados">
              <p>Programa de afiliados</p>
            </a>
            <a href="/colaboraciones">
              <p>Colaboraciones</p>
            </a>
          </div>

          <div className="tk__footer-links-div">
            <h4 className="font-bold mb-2">Compañía</h4>
            <a href="/nosotros">
              <p>Sobre nosotros</p>
            </a>
            <a href="/carreras">
              <p>Trabaja con nosotros</p>
            </a>
            <a href="/contacto">
              <p>Contáctanos</p>
            </a>
          </div>
        </div>

        <hr className="my-6 border-orange-300" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-orange-800">
          <div className="tk__footer-copyright mb-2 md:mb-0">
            <p>
              © {new Date().getFullYear()} ROOMRADAR. Todos los derechos
              reservados.
            </p>
          </div>
          <div className="tk__footer-below-links flex gap-4">
            <a href="/terms">
              <div>
                <p>Términos y Condiciones</p>
              </div>
            </a>
            <a href="/priv">
              <div>
                <p>Política de Privacidad</p>
              </div>
            </a>
            <a href="/secu">
              <div>
                <p>Seguridad</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
