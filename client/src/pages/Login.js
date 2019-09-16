import React from "react";
import LoginForm from "../components/Client/Authentication/Login/LoginContianer";

import FormLayout from "../components/Client/HOC/FormLayout/FormLayout";
const Login = () => {
  return (
    <FormLayout title="Login">
      <LoginForm />
    </FormLayout>
  );
};

export default Login;
