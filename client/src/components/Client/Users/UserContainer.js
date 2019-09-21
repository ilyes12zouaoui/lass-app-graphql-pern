import React from "react";
import User from "./User";
import GraphqlErrorFlyingBox from "../UI/GraphqlErrorFlyingBox";
import LoadingFlyingBox from "../UI/LoadingFlyingBox";
import { withRouter } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { USER } from "../../../graphql/queries/user";
import { useSelector } from "react-redux";
import _ from "lodash";
const UserContainer = ({ match }) => {
  const id = match.params.id;
  let user = useSelector(state => {
    return state.authentication.user;
  }, _.isEqual);

  const { loading, error, data } = useQuery(USER, {
    variables: { where: { id } }
  });

  if (!!error) return <GraphqlErrorFlyingBox error={error} />;
  if (loading) return <LoadingFlyingBox />;

  const isOwner = user && user.id == id;
  if (!isOwner) user = data.user;
  return <User user={user} isOwner={isOwner} />;
};

export default withRouter(UserContainer);
