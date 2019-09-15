const { gql } = require("apollo-server-express");
const { importSchema } = require("graphql-import");
const userSchemaWithUpload = require("../user/SchemaWithUpload");

const typeDefs = gql`
  ${importSchema("./src/app/schema.graphql")}
`;

module.exports = [typeDefs, userSchemaWithUpload];
