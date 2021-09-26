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
          <label for="exampleFormControlSelect1">Example select</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
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
