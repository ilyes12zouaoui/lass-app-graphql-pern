import React from "react";

const SlideIcon = ({ onOpenModal }) => {
  return (
    <span
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "36px",
        width: "36px",
        cursor: "pointer",
        padding: "9px",
        borderRadius: "50%"
        // backgroundColor: "#22aeff"
      }}
      className="bg-pink"
      onClick={onOpenModal}
    >
      <span style={{ border: "1px solid white", margin: "2px 4px" }}></span>
      <span style={{ border: "1px solid white", margin: "0px 4px" }}></span>
      <span style={{ border: "1px solid white", margin: "2px 4px" }}></span>
    </span>
  );
};

export default SlideIcon;
