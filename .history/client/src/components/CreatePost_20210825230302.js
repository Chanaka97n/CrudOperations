import React, { useState } from "react";

export default function CreatePost() {
  const [values, setValues] = useState({
    topic: "",
    category: "",
    description: "",
  });

  const { topic, category, description } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    //console.log(location);

    let postData = new FormData();
    postData.append("topic", topic);
    postData.append("category", category);
    postData.append("description", description);

    console.log([...postData]);

    // try {
    //   let res = await createHotel(token, hotelData);
    //   console.log("HOTEL CREATE RES", res);
    //   toast.success("New Hotel Is posted");
    //   setTimeout(() => {
    //     window.location.reload();
    //   }, 1000);
    // } catch (err) {
    //   console.log(err);
    //   toast.error(err.response.data);
    //   setIsLoading(false);
    // }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

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
