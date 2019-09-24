import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const BanUser = ({ deleteContactUsMessage }) => {
  return (
    <FontAwesomeIcon
      icon={faTrashAlt}
      className="color-pink"
      size="lg"
      style={{ cursor: "pointer" }}
      onClick={() => {
        deleteContactUsMessage();
      }}
    />
  );
};

export default BanUser;
