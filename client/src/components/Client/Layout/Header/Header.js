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
import Link from "./Link/Link";
import DropDown from "./DropDown/DropDown";
import "./Header.css";
const Header = () => {
  return (
    <Navbar
      className="client-header"
      bg="primary"
      expand="md"
      variant="light"
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
          <Link title="Home" to="/" />
          <Link title="Login" to="/login" />
          <Link title="Inscription" to="/inscription" />

          <DropDown
            title="Dropdown"
            listLinks={[
              { title: "Action", to: "/users/1" },
              { title: "Action 2", to: "/users/2" }
            ]}
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
