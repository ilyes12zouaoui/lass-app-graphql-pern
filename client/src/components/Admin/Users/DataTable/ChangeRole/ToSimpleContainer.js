import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { CHANGE_USER_ROLE_TO_SIMPLE } from "../../../../../graphql/mutations/authentication/changeUserRoleToSimple";
import ToSimple from "./ToSimple";
import GraphqlErrorHandler from "../../../UI/GraphqlErrorHandler";
import Loading from "../../../UI/Loading";

const DataTableContainer = ({ id }) => {
  const [changeUserRoleToSimple, { data, loading, error }] = useMutation(
    CHANGE_USER_ROLE_TO_SIMPLE,
    { variables: { data: { id } } }
  );
  if (loading) return <Loading />;
  if (error) return <GraphqlErrorHandler error={error || null} />;

  return <ToSimple changeUserRoleToSimple={changeUserRoleToSimple} />;
};

export default DataTableContainer;
