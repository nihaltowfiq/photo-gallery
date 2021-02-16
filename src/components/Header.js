import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <NavLink to="/">Pricing</NavLink>
              <NavLink to="/login">Features</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </div>
  );
};

export default Header;
