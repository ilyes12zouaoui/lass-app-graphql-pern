import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import Loading from "../../UI/Loading";
import GraphqlErrorHandler from "../../UI/GraphqlErrorHandler";
import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("Required")
});

const initialValues = {
  email: ""
};

const ResendResetPasswordEmail = ({
  resendResetPasswordEmail,
  error,
  data,
  loading
}) => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        let data = {
          email: values.email
        };
        resendResetPasswordEmail({ variables: { data } });
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

            <button
              className="bg-blue button-custom"
              disabled={loading}
              type="submit"
            >
              Submit
            </button>

            {loading ? <Loading /> : null}

            <GraphqlErrorHandler error={error || null} />
            {!!data ? (
              <div className="color-blue mt-2">
                a reset password email was sent successfully to {values.email}
              </div>
            ) : null}
          </Form>
        );
      }}
    />
  );
};

export default ResendResetPasswordEmail;
