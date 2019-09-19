import { createAction } from "redux-starter-kit";
import jwt_decode from "jwt-decode";
// import cookie from "js-cookie";

import { history } from "../../configs/history";
export const insertUserInformations = createAction("INSERT_USER_INFORMATIONS");

export const diconnectUser = createAction("DISCONNECT_USER");

const disconnectTimeMilliSeconds = jwt => {
  let beforExpTimeSeconds = 60 * 60 * 24; //before one day
  let nowTimeMilliSeconds = new Date().getTime();
  //return 10 * 1000;
  return (
    (jwt_decode(jwt).exp - beforExpTimeSeconds) * 1000 - nowTimeMilliSeconds
  );
};

export const ThunkDisconnectUserAfterTimeOut = expirationTime => {
  // console.log("time to timeout", expirationTime / 1000);
  return dispatch => {
    setTimeout(() => {
      dispatch(ThunkDisconnectUser());
    }, expirationTime);
  };
};

export const ThunkCheckIfAlreadyAuthenticated = payload => dispatch => {
  const jwt = localStorage.getItem("lass-app-jwt-token");

  if (!!jwt) {
    dispatch(ThunkAuthenticateUser({ jwt, isRedirecting: false }));
  }
};

export const ThunkAuthenticateUser = payload => dispatch => {
  const { jwt, isRedirecting, redirectTo = "" } = payload;
  // cookie.set("LassAppJwt", jwt);
  localStorage.setItem("lass-app-jwt-token", jwt);
  let user = jwt_decode(jwt);
  dispatch(
    insertUserInformations({
      jwt,
      user,
      isAuthenticated: true
    })
  );
  dispatch(ThunkDisconnectUserAfterTimeOut(disconnectTimeMilliSeconds(jwt)));
  if (isRedirecting) {
    if (redirectTo != "") {
      history.push(redirectTo);
    } else if (user.role == "ADMIN") {
      history.push("/admin/users");
    } else {
      history.push(`/users/${user && user.id}`);
    }
  }
};

export const ThunkDisconnectUser = () => dispatch => {
  // it's always dispatched on client
  // cookie.remove("LassAppJwt");
  localStorage.removeItem("lass-app-jwt-token");

  dispatch(diconnectUser());
  history.push("/");
};
