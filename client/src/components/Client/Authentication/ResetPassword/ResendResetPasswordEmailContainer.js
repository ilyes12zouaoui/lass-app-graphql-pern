import { useMutation } from "@apollo/react-hooks";
import { RESEND_RESET_PASSWORD_EMAIL } from "../../../../graphql/mutations/authentication/resendResetPasswordEmail";
import ResendResetPasswordEmail from "./ResendResetPasswordEmail";
import React from "react";
const LoginContainer = () => {
  const [resendResetPasswordEmail, { data, loading, error }] = useMutation(
    RESEND_RESET_PASSWORD_EMAIL
  );
  return (
    <ResendResetPasswordEmail
      resendResetPasswordEmail={resendResetPasswordEmail}
      loading={loading}
      error={error}
      data={data}
    />
  );
};
export default LoginContainer;
