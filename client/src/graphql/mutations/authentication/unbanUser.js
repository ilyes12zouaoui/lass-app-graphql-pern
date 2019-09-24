import gql from "graphql-tag";

export const UNBAN_USER = gql`
  mutation($data: UnbanUserInput!) {
    unbanUser(data: $data) {
      id
      isBanned
    }
  }
`;
