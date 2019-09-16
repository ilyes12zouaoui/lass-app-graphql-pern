import Login from "./Login";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../../../../graphql/mutations/authentication/loginUser";
import ResendAccoutActivationEmail from "./ResendAccoutActivationEmail";
import React from "react";
const LoginContainer = () => {
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);
  //   if (loading) return <div>Loading ...</div>;
  //   if (error) return <GraphqlErrorHandler error={error || null} />;
  return (
    <Login loginUser={loginUser} loading={loading} error={error} data={data} />
  );
};
export default LoginContainer;
