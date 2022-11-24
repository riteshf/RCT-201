import React, { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/posts").then((d) => {
      setPosts(d.data);
    });
  }, []);
  return (
    <div>
      <h1>Post</h1>
      {posts.map((post) => (
        <ul key={post.id}>
          <li>{post.message}</li>
        </ul>
      ))}
    </div>
  );
};

export default Posts;
