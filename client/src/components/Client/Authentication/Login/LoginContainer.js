import Login from "./Login";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../../../../graphql/mutations/authentication/loginUser";

import { useSelector, useDispatch } from "react-redux";

import { ThunkAuthenticateUser } from "../../../../store/authentication/actions";
import React from "react";

const LoginContainer = () => {
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);
  //   if (loading) return <div>Loading ...</div>;
  //   if (error) return <GraphqlErrorHandler error={error || null} />;

  //if authenticated successfully
  const dispatch = useDispatch();
  if (!!data) {
    dispatch(
      ThunkAuthenticateUser({
        jwt: data.loginUser.jwt,
        isRedirecting: true
      })
    );
  }

  return (
    <Login loginUser={loginUser} loading={loading} error={error} data={data} />
  );
};
export default LoginContainer;
