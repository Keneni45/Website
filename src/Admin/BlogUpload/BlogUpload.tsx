import React, { useState } from "react";
import "./blogUpload.css";

export default function BlogUpload({}) {
  const [imageUpload, setImageUpload] = useState(null);
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0);
  const [addText, setAddText] = useState("");
  const handleChange = (e: any) => {
    if (e.target.files[0]) setImageUpload(e.target.files[0]);
  };
  const handleUpload = () => {};
  return (
    <div className="imageUpload">
      <progress className="imageUpload__progress" value={progress} max="100" />
      <input
        type="text"
        placeholder="Enter a caption..."
        className="imageUpload__input"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <input
        className="imageUpload__file"
        type="file"
        onChange={handleChange}
      />
      <button className="imageUpload__button" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
}
