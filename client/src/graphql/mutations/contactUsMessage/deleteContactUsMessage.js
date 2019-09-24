import gql from "graphql-tag";

export const DELETE_CONTACT_US_MESSAGE = gql`
  mutation($where: ContactUsMessageWhereUniqueInput!) {
    deleteContactUsMessage(where: $where) {
      id
    }
  }
`;
