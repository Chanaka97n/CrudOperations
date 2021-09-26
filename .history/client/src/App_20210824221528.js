import React, { Component, useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPost = async () => {
    try {
      await axios.get("http://localhost:8000/posts").then((res) => {
        setPosts(res.data.existingPosts);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(getPost());
    // try {
    //   const res = getPost();
    //   setIsLoading(true);
    //   // setPosts(res.data.existingPosts);
    //   console.log(res);
    //   // console.log(res.data.existingPosts);
    //   setIsLoading(false);
    // } catch (error) {
    //   console.log(error);
    //   setIsLoading(false);
    // }
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
