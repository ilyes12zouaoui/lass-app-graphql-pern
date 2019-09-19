import React from "react";

import { NavLink as ReactRouterNavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";

import {
  CommunLinksLeft,
  CommunLinksRight,
  UnAuthenticatedUserOnly,
  turnLinksDataToAnArrayOfComponents
} from "./LinksData";

import { useSelector } from "react-redux";
import UserContainer from "./DropDown/User/UserContainer";
import { ADMIN } from "../../../../configs/userRoles";
const Header = () => {
  const userRole = useSelector(state => {
    return state.authentication.user && state.authentication.user.role;
  });
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
        activeClassName=""
        to="/"
      >
        Zouaoui ilyes Redux CRUD
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {turnLinksDataToAnArrayOfComponents(CommunLinksLeft)}
          {!userRole
            ? turnLinksDataToAnArrayOfComponents(UnAuthenticatedUserOnly)
            : null}
          {turnLinksDataToAnArrayOfComponents(CommunLinksRight)}
          {!!userRole ? <UserContainer /> : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
