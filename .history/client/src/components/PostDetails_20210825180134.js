import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PostDetails() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () =>
    await axios.get("/posts/$id").then((res) => {
      setPosts(res.data);
      console.log(res.data);
    });

  return <div>PostDetails</div>;
}
