import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { DELETE_CONTACT_US_MESSAGE } from "../../../../../graphql/mutations/contactUsMessage/deleteContactUsMessage";
import { CONTACT_US_MESSAGES } from "../../../../../graphql/queries/contactUsMessages";
import Delete from "./Delete";
import GraphqlErrorHandler from "../../../UI/GraphqlErrorHandler";
import Loading from "../../../UI/Loading";

const DataTableContainer = ({ id }) => {
  const [deleteContactUsMessage, { data, loading, error }] = useMutation(
    DELETE_CONTACT_US_MESSAGE,
    {
      refetchQueries: [{ query: CONTACT_US_MESSAGES }],
      variables: { where: { id } }
    }
  );
  if (loading) return <Loading />;
  if (error) return <GraphqlErrorHandler error={error || null} />;

  return <Delete deleteContactUsMessage={deleteContactUsMessage} />;
};

export default DataTableContainer;
