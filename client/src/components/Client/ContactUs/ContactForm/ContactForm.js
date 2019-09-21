import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import Loading from "../../UI/Loading";

import GraphqlErrorHandler from "../../UI/GraphqlErrorHandler";
import { Formik } from "formik";
import * as yup from "yup";
const validationSchema = yup.object().shape({
  fullName: yup.string().notRequired(),
  subject: yup.string().notRequired(),
  email: yup
    .string()
    .email("Invalid email")
    .required("Required"),
  message: yup
    .string()
    .min(5, "Too Short!")
    .required("Required")
});

const initialValues = {
  fullName: "",
  email: "",
  subject: "",
  message: ""
};

const Login = ({ createContactUsMessage, error, data, loading }) => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        let data = {
          fullName: values.fullName,
          email: values.email,
          subject: values.subject,
          message: values.message
        };
        createContactUsMessage({ variables: { data } });
      }}
      render={({
        handleSubmit,
        handleChange,
        handleBlur,
        resetForm,
        values,
        touched,
        isValid,
        errors,
        setFieldError
      }) => {
        return (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicFullName">
              <Form.Label>Full Name (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                isValid={touched.fullName && !errors.fullName}
                isInvalid={touched.fullName && !!errors.fullName}
              />
              <Form.Control.Feedback>success</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.fullName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Your E-mail *</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
                isInvalid={touched.email && !!errors.email}
              />
              <Form.Control.Feedback>success</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.fullName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicsubject">
              <Form.Label>Subject *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter subject"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                isValid={touched.subject && !errors.subject}
                isInvalid={touched.subject && !!errors.subject}
              />
              <Form.Control.Feedback>success</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.subject}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message *</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Message"
                name="message"
                value={values.message}
                onChange={handleChange}
                isValid={touched.message && !errors.message}
                isInvalid={touched.message && !!errors.message}
              />
              <Form.Control.Feedback>success</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>
            <button
              className="bg-blue button-custom"
              disabled={loading}
              type="submit"
            >
              Send Message
            </button>
            {loading ? <Loading /> : null}

            <GraphqlErrorHandler error={error || null} />

            {!!data ? (
              <div className="color-blue mt-2">successfully sent</div>
            ) : null}
          </Form>
        );
      }}
    />
  );
};

export default Login;
