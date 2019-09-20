import GeneralInformation from "./GeneralInformation";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_USER_INFORMATIONS } from "../../../../../../graphql/mutations/user/updateUserInformations";
import { useDispatch, useSelector } from "react-redux";
import { ThunkAuthenticateUser } from "../../../../../../store/authentication/actions";
import _ from "lodash";
import React from "react";
const GeneralInformationContianer = ({ onCloseModal }) => {
  const [updateUserInformations, { data, loading, error }] = useMutation(
    UPDATE_USER_INFORMATIONS
  );
  //   if (loading) return <div>Loading ...</div>;
  //   if (error) return <GraphqlErrorHandler error={error || null} />;
  const dispatch = useDispatch();
  if (!!data) {
    dispatch(
      ThunkAuthenticateUser({
        jwt: data.updateUserInformations.jwt,
        isRedirecting: false
      })
    );
    onCloseModal();
  }

  const initialValues = useSelector(store => {
    return {
      firstName:
        (store.authentication.user && store.authentication.user.firstName) ||
        "",
      lastName:
        (store.authentication.user && store.authentication.user.lastName) || "",

      telephone:
        (store.authentication.user && store.authentication.user.telephone) ||
        "",

      description:
        (store.authentication.user && store.authentication.user.description) ||
        "",

      address:
        (store.authentication.user && store.authentication.user.address) || ""
    };
  }, _.isEqual);

  return (
    <GeneralInformation
      initialValues={initialValues}
      updateUserInformations={updateUserInformations}
      loading={loading}
      error={error}
      data={data}
    />
  );
};
export default GeneralInformationContianer;
