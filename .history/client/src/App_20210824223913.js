import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      await axios.get("http://localhost:8000/posts").then((res) => {
        setIsLoading(true);
        setPosts(res.data.existingPosts);
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
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
