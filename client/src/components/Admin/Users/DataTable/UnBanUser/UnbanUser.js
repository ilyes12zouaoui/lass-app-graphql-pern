import React from "react";
import style from "./Button.module.css";
const BanUser = ({ unbanUser }) => {
  return (
    <button
      className={`${style.changeButton} bg-pink`}
      onClick={() => {
        unbanUser();
      }}
    >
      unban User
    </button>
  );
};

export default BanUser;
