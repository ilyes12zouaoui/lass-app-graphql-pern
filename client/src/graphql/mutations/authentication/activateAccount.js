import gql from "graphql-tag";

export const ACTIVATE_ACCOUNT = gql`
  mutation($data: ActivateAccountInput!) {
    activateAccount(data: $data)
  }
`;
