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
    name: "Claim",
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
  endpoint: `http://127.0.0.1:4466`,
  secret: `mysecret`
});
exports.prisma = new exports.Prisma();
