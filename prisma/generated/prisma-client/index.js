"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Token",
    embedded: false
  },
  {
    name: "ContactUsMessage",
    embedded: false
  },
  {
    name: "SexeType",
    embedded: false
  },
  {
    name: "TokenType",
    embedded: false
  },
  {
    name: "UserRole",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://lassgraphqlapp-b039b280df.herokuapp.com/`,
  secret: `mysecret`
});
exports.prisma = new exports.Prisma();
