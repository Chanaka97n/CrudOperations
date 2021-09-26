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

  //state
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  // destructuring varibles from state
  const { topic, category, description } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    // setIsLoading(true);
    // let hotelData = new FormData();
    // hotelData.append("title", title);
    // hotelData.append("content", content);
    // hotelData.append("location", location);
    // hotelData.append("price", price);
    // image && hotelData.append("image", image); //if statement
    // hotelData.append("from", from);
    // hotelData.append("to", to);
    // hotelData.append("bed", bed);

    // console.log([...hotelData]);

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
