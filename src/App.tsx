import { useState } from "react";
import BlogUpload from "./Admin/BlogUpload/BlogUpload";
import Post from "./Admin/Post/Post";

import "./App.css";
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <h1>jjjjj</h1>
      <Home />

      <BlogUpload />
      <Post />
    </div>
  );
}

export default App;
