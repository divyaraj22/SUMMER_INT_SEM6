import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

// import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    {/* <Navbar.Brand href="/home">StudentManagementSystem</Navbar.Brand> */}
    <Navbar.Brand as={Link} to="/Home">StudentManagementSystem</Navbar.Brand>
    
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link to="/Login" className="nav-link">Login</Link>
          <Link to="/Registration" className="nav-link">Register</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
