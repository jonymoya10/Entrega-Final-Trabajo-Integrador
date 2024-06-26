import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import logoImage from "/src/assets/img/logo.svg";
export const Footer = () => {
  return (
    <footer className="footer" id= "Contacto">
      <section className="bg-light py-4 py-md-5 py-xl-8 border-top border-light">
        <div className="container overflow-hidden">
          <div className="row gy-4 gy-lg-0 justify-content-xl-between">
            <div className="col-12 col-md-4 col-lg-3 col-xl-2">
              <div className="widget">
                <a href="#!">
                  <img
                    className="logo-img img-fluid"
                    src={logoImage}
                    alt="Logo"
                    style={{ width: "150px", height: "50px" }}
                  />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 col-xl-2">
              <div className="widget">
                <h4 className="widget-title mb-4">Ponerse en contacto</h4>
                <address className="mb-4">
                  8014 Edith Blvd NE, Albuquerque, Nueva York, Estados Unidos
                </address>
                <p className="mb-1">
                  <a
                    className="link-secondary text-decoration-none"
                    href="tel:+15057922430"
                  >
                    (505) 792-2430
                  </a>
                </p>
                <p className="mb-0">
                  <a
                    className="link-secondary text-decoration-none"
                    href="mailto:demo@yourdomain.com"
                  >
                    demo@yourdomain.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 col-xl-2">
              <div className="widget">
                <h4 className="widget-title mb-4">Aprende Más</h4>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a
                      href="#!"
                      className="link-secondary text-decoration-none"
                    >
                      Acerca de
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#!"
                      className="link-secondary text-decoration-none"
                    >
                      Contacto
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#!"
                      className="link-secondary text-decoration-none"
                    >
                      Anunciar
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#!"
                      className="link-secondary text-decoration-none"
                    >
                      Términos de servicio
                    </a>
                  </li>
                  <li className="mb-0">
                    <a
                      href="#!"
                      className="link-secondary text-decoration-none"
                    >
                      Política de privacidad
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-xl-4">
              <div className="widget">
                <h4 className="widget-title mb-4">Nuestro boletín</h4>
                <p className="mb-4">
                  Regístrate para recibir correos electrónicos de marketing,
                  incluidas promociones, recompensas, experiencias de viaje e
                  información sobre los productos y servicios.
                </p>
                <form action="#!">
                  <div className="row gy-4">
                    <div className="col-12">
                      <div className="input-group">
                        <span
                          className="input-group-text"
                          id="email-newsletter-addon"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-envelope"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                          </svg>
                        </span>
                        <input
                          type="email"
                          className="form-control"
                          id="email-newsletter"
                          value=""
                          placeholder="Email"
                          aria-label="email-newsletter"
                          aria-describedby="email-newsletter-addon"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-light py-4 py-md-5 py-xl-8 border-top border-light-subtle">
        <div className="container overflow-hidden">
          <div className="row gy-4 gy-md-0">
            <div className="col-xs-12 col-md-7 order-1 order-md-0">
              <div className="copyright text-center text-md-start">
                &copy; 2024. Todos los derechos reservados
              </div>
              <div className="credits text-secondary text-center text-md-start mt-2 fs-7">
                Construido por{" "}
                <a href="" className="link-secondary text-decoration-none">
                  JONATHAN EXEQUIEL MOYANO
                </a>{" "}
                <span className="text-primary">&#9829;</span>
              </div>
            </div>

            <div className="col-xs-12 col-md-5 order-0 order-md-1">
              <ul className="nav justify-content-center justify-content-md-end">
                <li className="nav-item">
                  <a className="nav-link link-dark" href="#!">
                    <FaFacebook />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-dark" href="#!">
                    <FaYoutube />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-dark" href="#!">
                    <FaTwitter />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-dark" href="#!">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
