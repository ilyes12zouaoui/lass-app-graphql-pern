import gql from "graphql-tag";

export const RESEND_RESET_PASSWORD_EMAIL = gql`
  mutation($data: ResendResetPasswordEmailInput!) {
    resendResetPasswordEmail(data: $data)
  }
`;
