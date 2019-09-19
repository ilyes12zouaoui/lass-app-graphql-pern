import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import Loading from "../../UI/Loading";

import GraphqlErrorHandler from "../../UI/GraphqlErrorHandler";
import ResendAccoutActivationEmail from "./ResendAccoutActivationEmail";
import { Formik } from "formik";
import * as yup from "yup";
import { NavLink } from "react-router-dom";
import "./Login.css";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("Required"),
  password: yup.string().required("Password is required")
});

const initialValues = {
  password: "",
  email: ""
};

const Login = ({ loginUser, error, data, loading }) => {
  const isInactiveAccount =
    error &&
    error.graphQLErrors &&
    error.graphQLErrors[0] &&
    error.graphQLErrors[0].message.includes("inactive");
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        let data = {
          password: values.password,
          email: values.email
        };
        loginUser({ variables: { data } });
      }}
      render={({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
        setFieldError
      }) => {
        const errorMessage = "";

        if (error && error.graphQLErrors && error.graphQLErrors[0].message) {
        }
        return (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address *</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </Form.Group>

            <button
              className="bg-blue button-custom"
              disabled={loading}
              type="submit"
            >
              Login
            </button>
            <div className="mt-2">
              <NavLink
                to="/resend-reset-password-email"
                className="forgot-your-password-link"
              >
                forgot your password ?
              </NavLink>
            </div>
            {loading ? <Loading /> : null}
            {isInactiveAccount ? (
              <ResendAccoutActivationEmail email={values.email} />
            ) : (
              <GraphqlErrorHandler error={error || null} />
            )}
            {!!data ? <div className="color-blue mt-2">success</div> : null}
          </Form>
        );
      }}
    />
  );
};

export default Login;
