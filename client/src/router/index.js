import React from "react";

import { Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { ADMIN } from "../configs/userRoles";

import {
  AuthenticatedAdminOnly,
  CommunRoutes,
  UnAuthenticatedUserOnly,
  PageNotFoundRoute
} from "./routes";

import { Route } from "react-router-dom";

const App = () => {
  const userRole = useSelector(state => {
    return state.authentication.user && state.authentication.user.role;
  });
  console.log("il userrole", userRole);
  return (
    <Switch>
      {CommunRoutes}
      {userRole == ADMIN ? AuthenticatedAdminOnly : null}
      {!userRole ? UnAuthenticatedUserOnly : null}
      {PageNotFoundRoute}
    </Switch>
  );
};

export default App;
