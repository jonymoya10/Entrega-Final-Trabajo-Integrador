import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menu from "./components/helpers/Menu/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./components/helpers/Inicio/Inicio";
import Alojamiento from "./components/helpers/Nosotros/Alojamiento";
import { Servicios } from "./components/helpers/Servicios/Atracción";
import  ContactForm  from "./components/helpers/Contacto/Reserva";
import { Footer } from "./components/helpers/Footer/Contacto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [count, setCount] = useState(0);
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  return (
    <div className="App">
      {showBtn && (
        <button className="btn">
          <FontAwesomeIcon
            icon={faArrowUp}
            style={{ fontSize: "20px" }}
            onClick={() => window.scrollTo(0, 0)}
          />
        </button>
      )}
      <Router>
      <Menu />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Alojamiento" element={<Alojamiento />} />
          <Route path="/Atracción" element={<Servicios />} />
          <Route path="/reserva" element={<ContactForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
