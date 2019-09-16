import gql from "graphql-tag";

export const RESEND_ACCOUNT_ACTIVATION_EMAIL = gql`
  mutation($data: ResendAccountActivationEmailInput!) {
    resendAccountActivationEmail(data: $data)
  }
`;
