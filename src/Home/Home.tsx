import React, { useState } from "react";
import Post from "../Admin/Post/Post";

import "./home.css";
export default function Home() {
  const [posts, setPosts] = useState([
    { username: "twd", caption: "build", imgeUrl: "" },
    { username: "twd1", caption: "build-mern", imgeUrl: "" },
    { username: "twd2", caption: "build-mern-stack", imgeUrl: "" },
  ]);

  return (
    <div>
      <div className="home-header">
        <ul className="unorderedList-item">
          <li>Home</li>
          <li>All Post</li>
          <li>Service</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
}
