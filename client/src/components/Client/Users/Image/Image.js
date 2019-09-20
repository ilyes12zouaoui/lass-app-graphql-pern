import React from "react";

const Image = ({ src }) => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <img style={{ width: "100%", height: "100%" }} src={src} />
    </div>
  );
};
export default Image;
