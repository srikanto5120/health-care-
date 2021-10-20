import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.jpg";
import "./Header.css";

import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { allContext } = useAuth();
  const { user, logout } = allContext;

  return (
    <div>
      <Navbar
        bg="dark"
        className="py-4"
        variant="dark"
        collapseOnSelect
        expand="lg"
      >
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#home">Eye Care</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className=" menu">
            <Nav className="mx-auto">
              <Nav.Link className="link" as={Link} to="/home">
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
              <Nav.Link as={Link} to="/signup">
                Signup{" "}
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

            {user.email ? (
              <Link to="/home" className="d-flex align-items-center name   ">
                <p className="ml-2 ">{user.displayName}</p>
                <img className="user-img" src={user?.photoURL} alt="" />
              </Link>
            ) : (
              <Link to="/home">
                {" "}
                <i className="fas icon fa-user"></i>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
