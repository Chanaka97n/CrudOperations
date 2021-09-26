import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () =>
    await axios.get("http://localhost:8000/posts").then((res) => {
      // setPosts(res.data.existingPosts);
      console.log(res.data.existingPosts);
    });

  {
    return (
      <div>
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
