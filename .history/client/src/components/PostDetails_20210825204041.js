import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PostDetails({ match }) {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    const res = getPost(match.params.id);

    console.log(res);
  }, []);

  const getPost = async (id) =>
    await axios.get(`http://localhost:8000/post/${id}`);

  return <div></div>;
}
