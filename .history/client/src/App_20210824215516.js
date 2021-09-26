import React, { Component, useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/posts").then((res) => {
      setPosts(res.data.existingPosts);
      console.log(posts);
      console.log(res.data.existingPosts);
    });
  }, []);

  {
    return (
      <div>
        hi
        {posts.map((posts) => (
          <div>
            <p>{posts.topic}</p>
          </div>
        ))}
      </div>
    );
  }
};

export default App;
