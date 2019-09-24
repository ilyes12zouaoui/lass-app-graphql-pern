import gql from "graphql-tag";

export const USER = gql`
  query($where: UserWhereUniqueInput!) {
    user(where: $where) {
      id
      email
      telephone
      isOnline
      isActive
      isBanned

      password
      firstName
      lastName
      birthDate
      role
      image
      description
      address
      sexe
    }
  }
`;
