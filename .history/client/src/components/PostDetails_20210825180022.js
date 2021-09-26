import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PostDetails() {
  const getPost = async () =>
    await axios.get("/posts").then((res) => {
      setPosts(res.data);
      // console.log(res.data);
    });

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  return <div>PostDetails</div>;
}
