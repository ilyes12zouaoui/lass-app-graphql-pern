import gql from "graphql-tag";

export const UPDATE_PROFILE_PICTURE = gql`
  mutation($data: Upload!) {
    updateProfilePicture(data: $data) {
      jwt
    }
  }
`;
