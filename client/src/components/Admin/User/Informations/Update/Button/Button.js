import React from "react";
import style from "./Button.module.css";
const Button = props => {
  return (
    <button {...props} className={`${style["update-button"]} bg-pink`}>
      {props.children || "submit"}
    </button>
  );
};

export default Button;
