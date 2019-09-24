import React, { useState } from "react";
import Loading from "./Loading";
const Thumb = ({ file }) => {
  const [thumb, setThumb] = useState(null);
  const [loading, setLoading] = useState(true);
  if (!file) {
    return null;
  }
  let reader = new FileReader();
  reader.onloadend = () => {
    setThumb(reader.result);
    setLoading(false);
  };
  reader.readAsDataURL(file);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mb-3">
      <img
        src={thumb}
        alt={file.name}
        className="img-thumbnail mt-2"
        height={200}
        width={200}
      />
    </div>
  );
};

export default Thumb;
