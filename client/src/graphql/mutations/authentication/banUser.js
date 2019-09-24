import gql from "graphql-tag";

export const BAN_USER = gql`
  mutation($data: BanUserInput!) {
    banUser(data: $data) {
      id
      isBanned
    }
  }
`;
