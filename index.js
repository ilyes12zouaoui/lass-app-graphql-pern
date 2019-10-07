const { ApolloServer, gql } = require("apollo-server-express");
const { prisma } = require("./prisma/generated/prisma-client");
const passport = require("passport");
// const { importSchema } = require("graphql-import");
const express = require("express");
const http = require("http");
const path = require("path");
require("./express/passportConfig")(passport);
// const fs = require("fs");

//importing resolvers properties, like query and mutation
// const Mutation = require("./resolvers/Mutation").Mutation;
// const Query = require("./resolvers/Query").Query;
// const Subscription = require("./resolvers/Subscription").Subscription;
// const Publication = require("./resolvers/Publication").Publication;

//preparing graphql server schema
// const typeDefs = gql`
//   ${importSchema("./schema.graphql").toString()}
// `;

// const mutationDefs = require("./schemasWithUpload");
//preparing graphql server resolvers
// const resolvers = {
//   Query,
//   Mutation,
//   Subscription,
//   Publication
// };

const resolvers = require("./src/app/resolvers");
const typeDefs = require("./src/app/schemas");

//creating our graphql server

const PORT = process.env.PORT || 4000;
const app = express();
app.use("/graphql", (req, res, next) => {
  passport.authenticate(
    "jwt-and-load-user",
    { session: false },
    (err, user, info) => {
      if (user) {
        req.user = user;
      } else {
        req.user = null;
      }
      next();
    }
  )(req, res, next);
});
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.resolve(__dirname, "client", "build")));

  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    return { prisma, req, res };
  }
});
server.applyMiddleware({ app });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: PORT }, () => {
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`
  );
});
