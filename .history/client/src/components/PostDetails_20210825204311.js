import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PostDetails({ match }) {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    getPost(match.params.id);
  }, []);

  const getPost = async (id) => {
    const res = await axios.get(`http://localhost:8000/post/${id}`);
    setPost(res.data.post);
    // console.log(res.data.post);
  };

  return <div></div>;
}
