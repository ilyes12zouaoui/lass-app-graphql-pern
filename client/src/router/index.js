import React, { useEffect } from "react";

import { Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ADMIN } from "../configs/userRoles";

import {
  AuthenticatedAdminOnly,
  CommunRoutes,
  UnAuthenticatedUserOnly,
  PageNotFoundRoute
} from "./routes";

import {
  ThunkCheckIfAlreadyAuthenticated,
  ThunkDisconnectUser
} from "../store/authentication/actions";

// import { Route } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ThunkCheckIfAlreadyAuthenticated());

    const localStorageAuthenticationEventHandler = event => {
      if (event.key === "lass-app-jwt-token") {
        if (event.newValue == null) {
          dispatch(ThunkDisconnectUser());
        } else {
          dispatch(ThunkCheckIfAlreadyAuthenticated());
        }
      }
    };

    window.addEventListener("storage", localStorageAuthenticationEventHandler);

    // if (typeof window !== "undefined") {
    //   window.addEventListener("storage", this.localStorageEventHandler);
    // }
    return () =>
      window.removeEventListener(
        "storage",
        localStorageAuthenticationEventHandler
      );
  }, []);
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
