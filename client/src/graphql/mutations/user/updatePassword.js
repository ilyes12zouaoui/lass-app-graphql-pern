import gql from "graphql-tag";

export const UPDATE_PASSWORD = gql`
  mutation($data: UpdatePasswordInput!) {
    updatePassword(data: $data)
  }
`;
