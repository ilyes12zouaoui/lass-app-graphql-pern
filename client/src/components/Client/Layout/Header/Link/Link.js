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

const Link = ({ title, ...props }) => {
  return (
    <Nav.Link as={ReactRouterNavLink} exact {...props}>
      {title}
    </Nav.Link>
  );
};

export default Link;
