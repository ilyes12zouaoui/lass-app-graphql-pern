import React from "react";
import style from "./Button.module.css";
const ToStaff = ({ changeUserRoleToStaff }) => {
  return (
    <button
      className={`${style.changeButton} bg-pink`}
      onClick={() => {
        changeUserRoleToStaff();
      }}
    >
      Change user to STAFF
    </button>
  );
};

export default ToStaff;
