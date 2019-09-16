import { configureStore } from "redux-starter-kit";

import authReducer from "../store/authentication/reducer";

const reducer = {
  authentication: authReducer
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production"
});

export { store };
