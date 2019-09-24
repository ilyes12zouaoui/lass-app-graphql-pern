import Image from "./Image";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_PROFILE_PICTURE } from "../../../../../../graphql/mutations/user/updateProfilePicture";
import { useDispatch, useSelector } from "react-redux";
import { ThunkAuthenticateUser } from "../../../../../../store/authentication/actions";
import _ from "lodash";
import React from "react";
const GeneralInformationContianer = ({ onCloseModal }) => {
  const [updateProfilePicture, { data, loading, error }] = useMutation(
    UPDATE_PROFILE_PICTURE
  );
  //   if (loading) return <div>Loading ...</div>;
  //   if (error) return <GraphqlErrorHandler error={error || null} />;
  const dispatch = useDispatch();
  if (!!data) {
    dispatch(
      ThunkAuthenticateUser({
        jwt: data.updateProfilePicture.jwt,
        isRedirecting: false
      })
    );
    onCloseModal();
  }

  return (
    <Image
      updateProfilePicture={updateProfilePicture}
      loading={loading}
      error={error}
      data={data}
    />
  );
};
export default GeneralInformationContianer;
