import gql from "graphql-tag";

export const CONTACT_US_MESSAGES = gql`
  query(
    $where: ContactUsMessageWhereInput
    $orderBy: ContactUsMessageOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    contactUsMessages(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      id
      subject
      message
      email
      fullName
      createdAt
      updatedAt
    }
  }
`;
