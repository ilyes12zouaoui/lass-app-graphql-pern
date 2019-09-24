import gql from "graphql-tag";

export const CHANGE_USER_ROLE_TO_STAFF = gql`
  mutation($data: ChangeUserRoleToStaffInput!) {
    changeUserRoleToStaff(data: $data) {
      id
      role
    }
  }
`;
