import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import Loading from "../../../../UI/Loading";
import GraphqlErrorHandler from "../../../../UI/GraphqlErrorHandler";
import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  address: yup
    .string()
    .min(5, "Too Short!")
    .notRequired(),
  description: yup
    .string()
    .min(5, "Too Short!")
    .notRequired(),
  telephone: yup.number().notRequired()
});

const Inscription = ({
  onCloseModal,
  updateUserInformations,
  initialValues,
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
          firstName: values.firstName,
          lastName: values.lastName,
          ...(values.telephone && { telephone: values.telephone }),
          ...(values.address && { address: values.address }),
          ...(values.description && { description: values.description })
        };
        updateUserInformations({ variables: { data } });
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
            <Form.Group controlId="formBasicFirstName">
              <Form.Label>First name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="First name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
                isInvalid={touched.firstName && !!errors.firstName}
              />
              <Form.Control.Feedback>success</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicLastName">
              <Form.Label>Last name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
                isInvalid={touched.lastName && !!errors.lastName}
              />
              <Form.Control.Feedback>success</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicAddress">
              <Form.Label> address (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Adrress"
                name="address"
                value={values.address}
                onChange={handleChange}
                isValid={touched.address && !errors.address}
                isInvalid={touched.address && !!errors.address}
              />
              <Form.Control.Feedback>success</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicTelephone">
              <Form.Label>Telephone (optional)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Telephone"
                name="telephone"
                value={values.telephone}
                onChange={handleChange}
                isValid={touched.telephone && !errors.telephone}
                isInvalid={touched.telephone && !!errors.telephone}
              />
              <Form.Control.Feedback>success</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.telephone}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Description (optional)</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Description"
                name="description"
                value={values.description}
                onChange={handleChange}
                isValid={touched.description && !errors.description}
                isInvalid={touched.description && !!errors.description}
              />
              <Form.Control.Feedback>success</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.description}
              </Form.Control.Feedback>
            </Form.Group>

            <button
              style={{ marginTop: "20px" }}
              className="bg-blue button-custom"
              disabled={loading}
              type="submit"
            >
              Update Information
            </button>
            {loading ? <Loading /> : null}
            <GraphqlErrorHandler error={error || null} />
            {!!data ? <div className="color-blue mt-2">success</div> : null}
          </Form>
        );
      }}
    />
  );
};

export default Inscription;
