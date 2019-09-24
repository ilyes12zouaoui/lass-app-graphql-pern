import React from "react";

const ToggleSection = ({ src, fullName }) => {
  return (
    <div style={{ display: "inline-block", padding: "10px" }}>
      <img
        style={{
          width: "26px",
          height: "26px",
          borderRadius: "50%",
          marginRight: "5px",
          marginBottom: "1px"
        }}
        src={src}
        alt="user pic"
      />
      <span style={{ marginRight: "5px", color: "#777" }}>{fullName}</span>
    </div>
  );
};

export default ToggleSection;
