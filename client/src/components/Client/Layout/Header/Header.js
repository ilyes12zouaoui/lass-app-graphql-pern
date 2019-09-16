import React from "react";

import { NavLink as ReactRouterNavLink } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  NavItem,
  Container,
  Dropdown
} from "react-bootstrap";
import "./Header.css";
const Header = () => {
  return (
    <Navbar
      className="client-header"
      bg="primary"
      expand="md"
      variant="dark"
      sticky="top"
    >
      <Navbar.Brand
        as={ReactRouterNavLink}
        className="client-header-brand"
        to="/"
      >
        Zouaoui ilyes Redux CRUD
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={ReactRouterNavLink} exact to="/">
            Home
          </Nav.Link>
          <Nav.Link as={ReactRouterNavLink} exact to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={ReactRouterNavLink} exact to="/inscription">
            Inscription
          </Nav.Link>

          <NavDropdown
            menuRole="client-header-dropdown-menu"
            title="Dropdown"
            bsPrefix="nav-link client-header-dropdown-toggle"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item as={ReactRouterNavLink} to="/users/1">
              Action
            </NavDropdown.Item>
            <NavDropdown.Item as={ReactRouterNavLink} to="/users/2">
              Another action
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
