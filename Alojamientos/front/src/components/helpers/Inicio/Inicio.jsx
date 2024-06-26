import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import logoImage1 from "/src/assets/img/inicio.jpg";
import logoImage2 from "/src/assets/img/inicio1.jpg";
import logoImage3 from "/src/assets/img/inicio2.jpg";

function Inicio() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
      <Carousel.Item>
        <img className="d-block w-100" src={logoImage1} alt="First slide" style={{ height: "400px", objectFit: "cover" }} />
        <Carousel.Caption>
          <p className="text-center mb-4">Busca Alojamientos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={logoImage2} alt="Second slide" style={{ height: "400px", objectFit: "cover" }} />
        <Carousel.Caption>
          <p className="text-center mb-4">Encuentra tu lugar ideal</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={logoImage3} alt="Third slide" style={{ height: "400px", objectFit: "cover" }} />
        <Carousel.Caption>
          <p className="text-center mb-4">Disfruta de tu estancia</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Inicio;
