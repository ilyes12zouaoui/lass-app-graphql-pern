import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./router";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

import { Router } from "react-router-dom";
import { history } from "./configs/history";

//apollo

import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import { client } from "./configs/apollo";
//redux
import { store } from "./configs/redux";
import { Provider } from "react-redux";

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
