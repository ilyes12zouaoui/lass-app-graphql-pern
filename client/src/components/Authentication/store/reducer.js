import { insertUserInformations, diconnectUser } from "./actions";
import { createReducer } from "redux-starter-kit";

export const initialStateAuthentication = {
  jwt: null,
  user: null,
  isAuthenticated: false
};

const reducer = createReducer(initialStateAuthentication, {
  [insertUserInformations]: (state, action) => {
    state.jwt = action.payload.jwt;
    state.user = action.payload.user;
    state.isAuthenticated = action.payload.isAuthenticated;
  },
  [diconnectUser]: (state, action) => {
    state.jwt = null;
    state.user = null;
    state.isAuthenticated = false;
  }
});

export default reducer;
