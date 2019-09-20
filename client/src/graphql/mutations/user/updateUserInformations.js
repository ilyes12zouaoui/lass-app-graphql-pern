import gql from "graphql-tag";

export const UPDATE_USER_INFORMATIONS = gql`
  mutation($data: UpdateUserInformationsInput!) {
    updateUserInformations(data: $data) {
      jwt
    }
  }
`;
