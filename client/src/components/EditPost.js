import React, { useEffect, useState } from "react";
import axios from "axios";

export default function EditPost({ match }) {
  const [value, setValue] = useState({
    topic: "",
    category: "",
    description: "",
  });

  const { topic, category, description } = value;

  const [isPending, setIsPending] = useState("");

  useEffect(() => {
    getPost(match.params.id);
  }, []);

  const getPost = async (id) => {
    const res = await axios.get(`http://localhost:8000/post/${id}`);
    setValue({
      topic: res.data.post.topic,
      category: res.data.post.postCategory,
      description: res.data.post.description,
    });
    // console.log(res);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.put(`http://localhost:8000/post/update/${match.params.id}`, value);
      console.log("post Updated");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="exampleFormControlInput1">Topic</label>
          <input
            name="topic"
            type="text"
            className="form-control"
            placeholder="Topic"
            value={topic}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Post category</label>
          <input
            name="category"
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
            name="description"
            type="text"
            onChange={handleChange}
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
