import React from "react";

const ToggleSection = ({ src, fullName }) => {
  return (
    <div style={{ display: "inline-block" }}>
      <img
        style={{
          width: "26px",
          height: "26px",
          borderRadius: "50%",
          marginRight: "5px"
        }}
        src={src}
        alt="user pic"
      />
      <span style={{ marginRight: "5px" }}>{fullName}</span>
    </div>
  );
};

export default ToggleSection;
