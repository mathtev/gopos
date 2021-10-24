import { Navbar, Container, Nav } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="me-4">Gopos</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/categories">
              categories
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products">
              products
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
