import React, { useEffect, useState } from "react";
import axios from "axios";

export default function EditPost({ match }) {
  //gets specific posts
  const [posts, setPosts] = useState({});

  useEffect(() => {
    getPost(match.params.id);
  }, []);

  const getPost = async (id) => {
    const res = await axios.get(`http://localhost:8000/post/${id}`);
    setPosts(res.data.post);
    console.log(res.data.post);
  };

  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [isPending, setIsPending] = useState();

  const handleSubmit = () => {
    let logs = { topic, category, description };
    console.warn("logs", logs);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="exampleFormControlInput1">Topic</label>
          <input
            type="text"
            className="form-control"
            placeholder="Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Post category</label>
          <input
            type="text"
            onChange={(e) => setCategory(e.target.value)}
            className="form-control"
            placeholder="Post category"
            value={category}
          />
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            placeholder="Description"
            value={description}
          />
        </div>
        {!isPending && (
          <button className="btn btn-outline-primary m-2">Save</button>
        )}
      </form>
    </div>
  );
}
