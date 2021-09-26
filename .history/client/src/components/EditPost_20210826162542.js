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
    // console.log(res.data.post);

    const [topic, setTopic] = useState(res.data.post.topic);
  };

  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [isPending, setIsPending] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newpost = { topic, category, description };

  //   setIsPending(true);

  //   fetch("http://localhost:8000/post/save", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(newpost),
  //   }).then(() => {
  //     console.log("new blog added");
  //     setIsPending(false);
  //   });
  // };
  return (
    <div>
      <form>
        {/* onSubmit={handleSubmit} */}
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
