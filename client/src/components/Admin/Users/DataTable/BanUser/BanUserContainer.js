import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { BAN_USER } from "../../../../../graphql/mutations/authentication/banUser";
import BanUser from "./BanUser";
import GraphqlErrorHandler from "../../../UI/GraphqlErrorHandler";
import Loading from "../../../UI/Loading";

const DataTableContainer = ({ id }) => {
  const [banUser, { data, loading, error }] = useMutation(BAN_USER, {
    variables: { data: { id } }
  });
  if (loading) return <Loading />;
  if (error) return <GraphqlErrorHandler error={error || null} />;

  return <BanUser banUser={banUser} />;
};

export default DataTableContainer;
