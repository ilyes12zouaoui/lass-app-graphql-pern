import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { CHANGE_USER_ROLE_TO_STAFF } from "../../../../../graphql/mutations/authentication/changeUserRoleToStaff";
import ToStaff from "./ToStaff";
import GraphqlErrorHandler from "../../../UI/GraphqlErrorHandler";
import Loading from "../../../UI/Loading";

const DataTableContainer = ({ id }) => {
  const [changeUserRoleToStaff, { data, loading, error }] = useMutation(
    CHANGE_USER_ROLE_TO_STAFF,
    { variables: { data: { id } } }
  );
  if (loading) return <Loading />;
  if (error) return <GraphqlErrorHandler error={error || null} />;

  return <ToStaff changeUserRoleToStaff={changeUserRoleToStaff} />;
};

export default DataTableContainer;
