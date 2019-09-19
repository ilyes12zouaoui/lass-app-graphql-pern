import React, { useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";
import { ACTIVATE_ACCOUNT } from "../../../../graphql/mutations/authentication/activateAccount";
import { withRouter } from "react-router-dom";
import SimpleMessageSection from "./SimpleMessageSection";
import { load } from "protobufjs";

const ActivateAccount = ({ match, ...props }) => {
  const { token } = match.params;

  const [activateAccount, { data, loading, error }] = useMutation(
    ACTIVATE_ACCOUNT,
    { variables: { data: { token } } }
  );
  useEffect(() => {
    activateAccount();
  }, []);

  return <SimpleMessageSection data={data} loading={loading} error={error} />;
};

export default withRouter(ActivateAccount);
