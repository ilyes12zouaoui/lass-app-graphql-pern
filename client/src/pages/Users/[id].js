import React from "react";
import User from "../../components/Client/Users/UserContainer";
const UserPage = ({ match }) => {
  const id = match.params.id;
  return <User />;
};

export default UserPage;
