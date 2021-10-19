import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <div>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end menu">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                {" "}
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                {" "}
                About{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/book">
                {" "}
                Book Now{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact{" "}
              </Nav.Link>
              {user.email ? (
                <button onClick={logout} className="btn btn-secondary">
                  Logout
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  {" "}
                  Login{" "}
                </Nav.Link>
              )}
            </Nav>

            <Navbar.Text>
              Signed in as: <a href="#login"> {user.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
