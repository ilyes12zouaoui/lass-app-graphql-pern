import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import Loading from "../../../../UI/Loading";
import GraphqlErrorHandler from "../../../../UI/GraphqlErrorHandler";
import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(5, "too short!"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required")
});

const initialValues = {
  password: "",
  passwordConfirmation: ""
};

const Inscription = ({ updatePassword, error, data, loading }) => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        let data = {
          password: values.password,
          passwordConfirmation: values.passwordConfirmation
        };
        updatePassword({ variables: { data } });
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
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
                isInvalid={touched.password && !!errors.password}
              />
              <Form.Control.Feedback>success</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicPasswordConfirmation">
              <Form.Label>Password confirmation *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password confirmation"
                name="passwordConfirmation"
                value={values.passwordConfirmation}
                onChange={handleChange}
                isValid={
                  touched.passwordConfirmation && !errors.passwordConfirmation
                }
                isInvalid={
                  touched.passwordConfirmation && !!errors.passwordConfirmation
                }
              />
              <Form.Control.Feedback>success</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.passwordConfirmation}
              </Form.Control.Feedback>
            </Form.Group>

            <button
              className="bg-pink button-custom"
              disabled={loading}
              type="submit"
            >
              update
            </button>
            {loading ? <Loading /> : null}
            <GraphqlErrorHandler error={error || null} />
            {!!data ? <div className="color-pink mt-2">success</div> : null}
          </Form>
        );
      }}
    />
  );
};

export default Inscription;
