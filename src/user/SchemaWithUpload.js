const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Mutation {
    updateProfilePicture(file: Upload): UpdateUserJwtResult!
  }
`;
