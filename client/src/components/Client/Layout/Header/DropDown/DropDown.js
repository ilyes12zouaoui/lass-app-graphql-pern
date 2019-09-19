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
import Link from "./Link";

const DropDown = ({ title, listLinks = [], ...props }) => {
  const Links = listLinks.map(link => {
    return <Link key={link.title} {...link} />;
  });

  return (
    <NavDropdown
      menuRole="client-header-dropdown-menu"
      title={title}
      bsPrefix="nav-link client-header-dropdown-toggle"
      id="collasible-nav-dropdown"
    >
      {Links}
    </NavDropdown>
  );
};

export default DropDown;
