import React from "react";

export default function CreatePost() {
  const [values, setValues] = useState({
    topic: "",
    category: "",
    description: "",
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="exampleFormControlInput1">Topic</label>
          <input
            type="text"
            // onChange={handleChange}
            className="form-control"
            placeholder="Topic"
            value={topic}
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Post category</label>
          <input
            type="text"
            // onChange={handleChange}
            className="form-control"
            placeholder="Topic"
            value={category}
          />
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <input
            type="text"
            // onChange={handleChange}
            className="form-control"
            placeholder="Topic"
            value={description}
          />
        </div>
      </form>
    </div>
  );
}
