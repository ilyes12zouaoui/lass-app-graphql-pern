import { Formik } from "formik";
import { useMutation } from "@apollo/react-hooks";
import { RESEND_ACCOUNT_ACTIVATION_EMAIL } from "../../../../graphql/mutations/authentication/resendAccountActivationEmail";

export default ({ email }) => {
  const [resendAccountActivationEmail, { data, loading, error }] = useMutation(
    RESEND_ACCOUNT_ACTIVATION_EMAIL,
    { variables: { data: { email } } }
  );

  if (!!data)
    return <span>an activation email was successfully sent to {email}</span>;
  return (
    <span>
      your account is not activated click this{" "}
      <span
        style={{ color: "blue", cursor: "pointer" }}
        onClick={() => {
          resendAccountActivationEmail({
            variables: { input: { email } }
          });
        }}
      >
        link
      </span>
      to resend the activation e-mail
    </span>
  );
};
