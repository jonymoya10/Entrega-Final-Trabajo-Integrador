import React from "react";
import { Card } from "react-bootstrap";
import imgServicio1 from "/src/assets/img/img-servicios/servicio-1.jpg";
import imgServicio2 from "/src/assets/img/img-servicios/servicio-2.jpg";
import imgServicio3 from "/src/assets/img/img-servicios/servicio-3.jpg";

export const Servicios = () => {
  return (
    <section className="Atracción" id="Atracción">
        <h2 className="text-center mb-4 form-title" id="Atracción">Atracciones turísticas</h2>
      <section className="contenedor-cards">
        <Servicio desc="Puente de la Mujer" img={imgServicio1} />
        <Servicio desc="El Obelisco" img={imgServicio2} />
        <Servicio desc="Caminito" img={imgServicio3} />
      </section>
      <a href="#Reserva" className="servicio-btn">
      Reservar 
      </a>
    </section>
  );
};

const Servicio = ({ desc, img }) => (
  <Card className="card">
    <Card.Img src={img} className="card-img" alt="..." />
    <Card.Body className="card-contenido">
      <Card.Text>{desc}</Card.Text>
    </Card.Body>
  </Card>
);

