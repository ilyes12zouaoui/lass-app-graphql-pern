import React from "react";

const User = ({ match }) => {
  const id = match.params.id;
  return <div>User {id}</div>;
};

export default User;
