import axios from "axios";
import React, { useState } from "react";

export default function CreatePost({ history }) {
  const [topic, setTopic] = useState("");
  const [postCategory, setpostCategory] = useState("");
  const [description, setDescription] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newpost = { topic, postCategory, description };

    setIsPending(true);

    axios.post("http://localhost:8000/post/save", newpost).then(() => {
      console.log("new blog added");
      history.push("/");
      setIsPending(false);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group mt-2">
          <label for="exampleFormControlInput1">Topic</label>
          <input
            type="text"
            className="form-control"
            placeholder="Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div className="form-group mt-2">
          <label for="exampleFormControlInput1">Post Category</label>
          <input
            type="text"
            onChange={(e) => setpostCategory(e.target.value)}
            className="form-control"
            placeholder="Post Category"
            value={postCategory}
          />
        </div>

        <div className="form-group mt-2">
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
