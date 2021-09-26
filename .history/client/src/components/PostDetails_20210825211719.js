import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PostDetails({ match }) {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    getPost(match.params.id);
  }, []);

  const getPost = async (id) => {
    const res = await axios.get(`http://localhost:8000/post/${id}`);
    setPosts(res.data.post);
    // console.log(res.data.post);
  };

  return (
    <div>
      <div class="card">
        <div class="card-header">Quote</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>{posts.description}</p>
            <footer class="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
