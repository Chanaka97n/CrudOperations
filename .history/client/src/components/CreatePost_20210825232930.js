import React, { useState } from "react";

export default function CreatePost() {
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("yoshi");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { topic, category, description };

    console.log(blog);
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
        <button className="btn btn-outline-primary m-2">Save</button>
      </form>
    </div>
  );
}
