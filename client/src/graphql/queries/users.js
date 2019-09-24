import gql from "graphql-tag";

export const USERS = gql`
  query(
    $where: UserWhereInput
    $orderBy: UserOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    users(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      id
      email
      telephone
      isOnline
      isActive
      isBanned

      password
      firstName
      lastName
      birthDate
      role
      image
      description
      address
      sexe
    }
  }
`;
