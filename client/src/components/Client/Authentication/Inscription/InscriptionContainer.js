import Inscription from "./Inscription";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_USER } from "../../../../graphql/mutations/authentication/createUser";
import React from "react";
const InscriptionContianer = () => {
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
  //   if (loading) return <div>Loading ...</div>;
  //   if (error) return <GraphqlErrorHandler error={error || null} />;
  return (
    <Inscription
      createUser={createUser}
      loading={loading}
      error={error}
      data={data}
    />
  );
};
export default InscriptionContianer;
