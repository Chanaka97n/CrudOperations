import React, { Component, useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      axios.get("http://localhost:8000/posts").then((res) => {
        setIsLoading(true);
        setPosts(res.data.existingPosts);
        console.log(posts);
        console.log(res.data.existingPosts);
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  {
    return (
      <div>
        {!isLoading
          ? posts.map((posts) => (
              <div>
                <p>{posts.topic}</p>
              </div>
            ))
          : "Loading"}
      </div>
    );
  }
};

export default App;
