import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import Loading from "../../../../UI/Loading";
import ThumbNailImage from "../../../../UI/ThumbNailImage";
import GraphqlErrorHandler from "../../../../UI/GraphqlErrorHandler";
import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  file: yup.mixed().required()
});

const initialValues = {
  file: null
};

const Inscription = ({ updateProfilePicture, error, data, loading }) => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        updateProfilePicture({ variables: { data: values.file } });
      }}
      render={({
        handleSubmit,
        handleChange,
        setFieldValue,
        values,
        touched,
        errors
      }) => {
        return (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="formFile">
              <Form.Label>image *</Form.Label>
              <Form.Control
                id="file"
                name="file"
                type="file"
                onChange={event => {
                  setFieldValue("file", event.currentTarget.files[0]);
                }}
                isValid={touched.file && !errors.file}
                isInvalid={touched.file && !!errors.file}
              />
              <Form.Control.Feedback>success</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.file}
              </Form.Control.Feedback>
            </Form.Group>
            <ThumbNailImage file={values.file} />

            <button
              className="bg-blue button-custom"
              disabled={loading}
              type="submit"
            >
              Update Image
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
