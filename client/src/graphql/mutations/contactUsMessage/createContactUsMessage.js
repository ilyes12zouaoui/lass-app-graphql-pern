import gql from "graphql-tag";

export const CREATE_CONTACT_US_MESSAGE = gql`
  mutation($data: CreateContactUsMessageInput!) {
    createContactUsMessage(data: $data) {
      email
    }
  }
`;
