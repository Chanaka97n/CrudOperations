import React, { Component, useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/posts").then((res) => {
      if (res.data.sucess) {
        setPosts(res.data.existingPosts);
        console.log(posts);
      }
      console.log(res.data);
    });
  }, []);

  // retrivePosts() {
  //   axios.get("http://localhost:8000/posts").then((res) => {
  //     if (res.data.sucess) {
  //       this.setState({
  //         posts: res.data.existingPosts,
  //       });
  //       console.log(res);
  //     }
  //   });
  // }

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
