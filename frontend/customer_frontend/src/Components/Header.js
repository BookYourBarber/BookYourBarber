import React from "react";
import {Navbar, Container} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
      <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Barbers</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    );
  }
  
  export default Header;