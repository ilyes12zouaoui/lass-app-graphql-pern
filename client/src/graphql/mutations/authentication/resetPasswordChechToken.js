import gql from "graphql-tag";

export const RESET_PASSWORD_CHECK_TOKEN = gql`
  mutation($data: ResetPasswordChechTokenInput!) {
    resetPasswordChechToken(data: $data)
  }
`;
