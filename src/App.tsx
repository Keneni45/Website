import { useState } from "react";
import BlogUpload from "./Admin/BlogUpload/BlogUpload";
import Post from "./Admin/Post/Post";

import "./App.css";
import Home from "./Home/Home";
import { string } from "yup";

function App() {
  return (
    <div className="App">
      <BlogUpload />
    </div>
  );
}

export default App;
