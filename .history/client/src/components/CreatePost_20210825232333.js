import React, { useState } from "react";

export default function CreatePost() {
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("yoshi");

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="exampleFormControlInput1">Topic</label>
          <input
            type="text"
            onChange={handleChange}
            className="form-control"
            placeholder="Topic"
            value={topic}
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Post category</label>
          <input
            type="text"
            onChange={handleChange}
            className="form-control"
            placeholder="Post category"
            value={category}
          />
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <input
            type="text"
            onChange={handleChange}
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
