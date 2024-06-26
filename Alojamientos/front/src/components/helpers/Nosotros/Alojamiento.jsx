import React, { useEffect, useState } from "react";
import logoImage from "/src/assets/img/hotel4.jpg";
import logoImage2 from "/src/assets/img/hotel5.jpg";
import logoImage3 from "/src/assets/img/hotel6.jpg";

const Alojamiento = () => {
  const [navColor, setNavColor] = useState("#000");

  const handleScroll = () => {
    const hotelSection = document.getElementById("hotel-section");
    const rect = hotelSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setNavColor("white");
    } else {
      setNavColor("#000");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="hotel-section d-flex flex-column align-items-center justify-content-center Alojamiento"
      id="Alojamiento"
    >
      <h3 className="form-title">Alojamiento Destacados</h3>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <article>
              <div className="card border-0 bg-transparent">
                <figure className="card-img-top mb-4 overflow-hidden bsb-overlay-hover">
                  <a href="#!">
                    <img
                      className="img-fluid bsb-scale bsb-hover-scale-up"
                      loading="lazy"
                      src={logoImage}
                      style={{
                        display: "block",
                        margin: "0 auto",
                        width: "800px",
                        height: "300px",
                      }}
                      alt="Casa Luisa Joshua Tree"
                    />
                  </a>
                </figure>
                <div className="card-body m-0 p-0">
                  <div className="entry-header mb-3">
                    <ul className="entry-meta list-unstyled d-flex mb-3">
                      <li>
                        <a
                          className="d-inline-flex px-2 py-1 link-primary text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2 text-decoration-none fs-7"
                          href="#!"
                        >
                          Casa
                        </a>
                      </li>
                    </ul>
                    <h2 className="card-title">
                      <a className="card-text">
                        Casa Luisa Joshua Tree
                      </a>
                    </h2>
                    <div className="additional-info mt-3">
                      <p className="price fs-5 fw-bold">
                        Precio por día: 600 $
                      </p>
                      <div className="icons d-flex align-items-center">
                        <span className="me-2">
                          <i className="fas fa-users"></i> 2
                        </span>
                        <span>
                          <i className="fas fa-bed"></i> 1
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="col-12 col-lg-4">
            <article>
              <div className="card border-0 bg-transparent">
                <figure className="card-img-top mb-4 overflow-hidden bsb-overlay-hover">
                  <a href="#!">
                    <img
                      className="img-fluid bsb-scale bsb-hover-scale-up"
                      loading="lazy"
                      src={logoImage2}
                      style={{
                        display: "block",
                        margin: "0 auto",
                        width: "800px",
                        height: "300px",
                      }}
                      alt="Way Apartamentos"
                    />
                  </a>
                </figure>
                <div className="card-body m-0 p-0">
                  <div className="entry-header mb-3">
                    <ul className="entry-meta list-unstyled d-flex mb-3">
                      <li>
                        <a
                          className="d-inline-flex px-2 py-1 link-primary text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2 text-decoration-none fs-7"
                          href="#!"
                        >
                          Departamento
                        </a>
                      </li>
                    </ul>
                    <h2 className="card-title">
                      <a className="card-text">
                        Way Apartamentos
                      </a>
                    </h2>
                    <div className="additional-info mt-3">
                      <p className="price fs-5 fw-bold">
                        Precio por día: 400 $
                      </p>
                      <div className="icons d-flex align-items-center">
                        <span className="me-2">
                          <i className="fas fa-users"></i> 3
                        </span>
                        <span>
                          <i className="fas fa-bed"></i> 2
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="col-12 col-lg-4">
            <article>
              <div className="card border-0 bg-transparent">
                <figure className="card-img-top mb-4 overflow-hidden bsb-overlay-hover">
                  <a href="#!">
                    <img
                      className="img-fluid bsb-scale bsb-hover-scale-up"
                      loading="lazy"
                      src={logoImage3}
                      style={{
                        display: "block",
                        margin: "0 auto",
                        width: "800px",
                        height: "300px",
                      }}
                      alt="Pocitos Plaza Hotel"
                    />
                  </a>
                </figure>
                <div className="card-body m-0 p-0">
                  <div className="entry-header mb-3">
                    <ul className="entry-meta list-unstyled d-flex mb-3">
                      <li>
                        <a
                          className="d-inline-flex px-2 py-1 link-primary text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2 text-decoration-none fs-7"
                          href="#!"
                        >
                          Hotel
                        </a>
                      </li>
                    </ul>
                    <h2 className="card-title">
                      <a className="card-text">
                        Pocitos Plaza Hotel
                      </a>
                    </h2>
                    <div className="additional-info mt-3">
                      <p className="price fs-5 fw-bold"> 
                        Precio por día: 150 $
                      </p>
                      <div className="icons d-flex align-items-center">
                        <span className="me-2">
                          <i className="fas fa-users"></i> 2
                        </span>
                        <span>
                          <i className="fas fa-bed"></i> 1
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alojamiento;
