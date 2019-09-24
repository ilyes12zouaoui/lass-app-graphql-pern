import React from "react";
import style from "./Button.module.css";
const ToSimple = ({ changeUserRoleToSimple }) => {
  return (
    <button
      className={`${style.changeButton} bg-pink`}
      onClick={() => {
        changeUserRoleToSimple();
      }}
    >
      Change user to SIMPLE
    </button>
  );
};

export default ToSimple;
