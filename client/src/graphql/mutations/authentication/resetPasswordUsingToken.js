import gql from "graphql-tag";

export const RESET_PASSWORD_USING_TOKEN = gql`
  mutation($data: ResetPasswordTokenInput!) {
    resetPasswordUsingToken(data: $data)
  }
`;
