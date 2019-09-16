import { Formik } from "formik";
import { useMutation } from "@apollo/react-hooks";
import { RESEND_ACCOUNT_ACTIVATION_EMAIL } from "../../../../graphql/mutations/authentication/resendAccountActivationEmail";
import React from "react";
import Loading from "../../UI/Loading";
import GraphqlErrorHandler from "../../UI/GraphqlErrorHandler";
export default ({ email }) => {
  const [resendAccountActivationEmail, { data, loading, error }] = useMutation(
    RESEND_ACCOUNT_ACTIVATION_EMAIL,
    { variables: { data: { email } } }
  );
  if (!!error) return <GraphqlErrorHandler error={error || null} />;
  if (loading) return <Loading />;
  if (!!data)
    return (
      <div className="error-color mt-2">
        an activation email was successfully sent to {email}
      </div>
    );
  return (
    <div className="error-color mt-2">
      your account is not activated click this{" "}
      <span
        style={{ textDecoration: "underline", cursor: "pointer" }}
        onClick={() => {
          resendAccountActivationEmail({
            variables: { input: { email } }
          });
        }}
      >
        link
      </span>{" "}
      to resend the activation e-mail
    </div>
  );
};
