import gql from "graphql-tag";

export const CREATE_USER = gql`
  mutation($data: CustomUserCreateInput!) {
    createUser(data: $data) {
      id
      email
    }
  }
`;
