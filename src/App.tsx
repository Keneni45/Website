import React, { useState } from "react";
import BlogUpload from "./Admin/BlogUpload/BlogUpload";

export default function App() {
  const [blogPost, setBlogPost] = useState("");
  const updateName = (blog: string): void => {
    setBlogPost(blog);
  };
  return (
    <div>
      <BlogUpload />
    </div>
  );
}
