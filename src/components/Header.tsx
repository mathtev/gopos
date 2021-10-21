import React from 'react';
import {Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Gopos</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/categories">categories</Nav.Link>
          <Nav.Link as={Link} to="/edit-categories">edit categories</Nav.Link>
          <Nav.Link as={Link} to="/products">products</Nav.Link>
          <Nav.Link as={Link} to="/edit-products">edit products</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
