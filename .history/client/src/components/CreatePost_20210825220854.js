import React from "react";

export default function CreatePost() {
  return (
    <div>
      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1">Topic</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Topic"
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Post category</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Topic"
          />
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
    </div>
  );
}
