import gql from "graphql-tag";

export const CHANGE_USER_ROLE_TO_SIMPLE = gql`
  mutation($data: ChangeUserRoleToSimpleInput!) {
    changeUserRoleToSimple(data: $data) {
      id
      role
    }
  }
`;
