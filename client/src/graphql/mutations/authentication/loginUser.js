import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation($data: LoginUserInput!) {
    loginUser(data: $data) {
      jwt
    }
  }
`;
