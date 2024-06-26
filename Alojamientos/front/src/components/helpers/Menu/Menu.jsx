import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logoImage from "/src/assets/img/logo.svg";

function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            className="logo-img img-fluid"
            src={logoImage}
            alt="Logo"
            style={{ width: "150px", height: "50px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/alojamiento" activeClassName="active">
              Alojamiento
            </Nav.Link>
            <Nav.Link as={NavLink} to="/atracción" activeClassName="active">
              Atracción turística
            </Nav.Link>
            <Nav.Link as={NavLink} to="/reserva" activeClassName="active">
              Alojamiento Tipo
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contacto" activeClassName="active">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
