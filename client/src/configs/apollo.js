import {
  ApolloClient,
  //   InMemoryCache,
  //   HttpLink,
  ApolloLink,
  split
} from "apollo-boost";
import { onError } from "apollo-link-error";
import { InMemoryCache } from "apollo-cache-inmemory";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { createUploadLink } from "apollo-upload-client";

// import cookie from "js-cookie";

// const client = new ApolloClient({
//   uri: "http://localhost:4000/graphql"
// });

const httpLink = new createUploadLink({
  uri: "http://localhost:4000/graphql", // Server URL (must be absolute)
  credentials: "same-origin" // Additional fetch() options like `credentials` or `headers`
  // Use fetch() polyfill on the server
  // fetch: !isBrowser && fetch
});

const wsLink = new WebSocketLink({
  // if you instantiate in the server, the error will be thrown
  uri: `ws://localhost:4000/graphql`,
  options: {
    reconnect: true
  }
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

//add authorization header from cookie
const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = localStorage.get("alzhelpsJwt");

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : ""
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});
const link = split(
  //process.browser ?
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  ApolloLink.from([errorLink, authLink, httpLink]) //authLink.concat(httpLink)
);
const cache = new InMemoryCache();
const client = new ApolloClient({
  connectToDevTools: process.env.NODE_ENV !== "production",
  //   ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
  link,
  cache
});

export { client };
