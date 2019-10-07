import React from "react";
import User from "../../components/Client/User/UserContainer";
import PageNotFound from "../page-not-found";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import _ from "lodash";
const UserPage = ({ match }) => {
  const id = match.params.id;
  let user = useSelector(state => {
    return state.authentication.user;
  }, _.isEqual);
  // if (user.id != id) return <PageNotFound />;
  return <User id={id} user={user} />;
};

export default withRouter(UserPage);
