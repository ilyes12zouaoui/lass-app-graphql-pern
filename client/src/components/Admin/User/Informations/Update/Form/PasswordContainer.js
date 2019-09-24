import Password from "./Password";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_PASSWORD } from "../../../../../../graphql/mutations/user/updatePassword";
import _ from "lodash";
import React from "react";
const GeneralInformationContianer = ({ onCloseModal }) => {
  const [updatePassword, { data, loading, error }] = useMutation(
    UPDATE_PASSWORD
  );
  //   if (loading) return <div>Loading ...</div>;
  //   if (error) return <GraphqlErrorHandler error={error || null} />;

  if (!!data) {
    onCloseModal();
  }

  return (
    <Password
      updatePassword={updatePassword}
      loading={loading}
      error={error}
      data={data}
    />
  );
};
export default GeneralInformationContianer;
