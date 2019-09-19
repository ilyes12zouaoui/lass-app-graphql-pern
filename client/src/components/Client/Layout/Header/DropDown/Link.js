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

const DropDownLink = ({ title, ...props }) => {
  return (
    <NavDropdown.Item as={ReactRouterNavLink} {...props}>
      {title}
    </NavDropdown.Item>
  );
};

export default DropDownLink;
