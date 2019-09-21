import React from "react";
import Update from "./Update/Update";
const Image = ({ src }) => {
  return (
    <div style={{ height: "100%", width: "100%", position: "relative" }}>
      <img style={{ width: "100%", height: "100%" }} src={src} />
      <Update />
    </div>
  );
};
export default Image;
