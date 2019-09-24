import React from "react";
import ToSimpleContainer from "./ToSimpleContainer";
import ToStaffContainer from "./ToStaffContainer";

const ChangeRole = ({ id, role }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      {role == "STAFF" ? (
        <ToSimpleContainer id={id} />
      ) : (
        <ToStaffContainer id={id} />
      )}
    </div>
  );
};

export default ChangeRole;
