import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { UNBAN_USER } from "../../../../../graphql/mutations/authentication/unbanUser";
import UnbanUser from "./UnbanUser";
import GraphqlErrorHandler from "../../../UI/GraphqlErrorHandler";
import Loading from "../../../UI/Loading";

const DataTableContainer = ({ id }) => {
  const [unbanUser, { data, loading, error }] = useMutation(UNBAN_USER, {
    variables: { data: { id } }
  });
  if (loading) return <Loading />;
  if (error) return <GraphqlErrorHandler error={error || null} />;

  return <UnbanUser unbanUser={unbanUser} />;
};

export default DataTableContainer;
