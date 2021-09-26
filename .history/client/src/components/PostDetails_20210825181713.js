import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PostDetails() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  // const getPost = async (id) =>
  //   await axios.get(`http://localhost:8000/post/${id}`).then((res) => {
  //     // setPosts(res.data);
  //     console.log(res);
  //   });

  return <div>PostDetails</div>;
}
