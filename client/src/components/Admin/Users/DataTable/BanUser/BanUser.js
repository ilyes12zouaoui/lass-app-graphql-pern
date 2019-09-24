import React from "react";
import style from "./Button.module.css";
const BanUser = ({ banUser }) => {
  return (
    <button
      className={`${style.changeButton} bg-pink`}
      onClick={() => {
        banUser();
      }}
    >
      ban User
    </button>
  );
};

export default BanUser;
