import React from "react";

const Image = ({ src }) => {
  return (
    <div>
      <img style={{ width: "100%", height: "100%" }} src={src} />
    </div>
  );
};
export default Image;
