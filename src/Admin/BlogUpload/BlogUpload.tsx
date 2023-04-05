import React, { useState } from "react";
import "./blogUpload.css";

export default function BlogUpload({}) {
  const [imageUpload, setImageUpload] = useState(null);
  const [blog, setBlog] = useState("");
  const [progress, setProgress] = useState(0);
  const [addText, setAddText] = useState("");
  const [title, setTitle] = useState("");

  const handleChange = (e: any) => {
    if (e.target.files[0]) setImageUpload(e.target.files[0]);
  };
  const handleUpload = (e: any) => {
    setBlog(e.target.value);
  };
  return (
    <div className="imageUpload">
      <progress className="imageUpload__progress" value={progress} max="100" />

      <input
        type="text"
        placeholder="Enter Your Title"
        className="title__upload"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter your Blog..."
        className="imageUpload__input"
        value={blog}
        onChange={(e) => setBlog(e.target.value)}
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
