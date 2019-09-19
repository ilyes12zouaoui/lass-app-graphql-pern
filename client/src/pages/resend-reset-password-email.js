import React from "react";
import ResendResetPasswordEmailContainer from "../components/Client/Authentication/ResetPassword/ResendResetPasswordEmailContainer";

import FormLayout from "../components/Client/HOC/FormLayout/FormLayout";
const ResendResetPasswordEmail = () => {
  return (
    <FormLayout title="Resed reset password email">
      <ResendResetPasswordEmailContainer />
    </FormLayout>
  );
};

export default ResendResetPasswordEmail;
