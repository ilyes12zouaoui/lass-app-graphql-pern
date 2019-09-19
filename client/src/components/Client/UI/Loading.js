import React from "react";

import { CubeSpinner } from "react-spinners-kit";
const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <CubeSpinner backColor="#ff004ecc" frontColor="#22aeffc9" />
      <div style={{ color: "#22aeffc9" }} className="mt-2">
        Loading...
      </div>
    </div>
  );
};

export default Loading;
