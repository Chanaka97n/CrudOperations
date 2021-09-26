import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () =>
    await axios.get("http://localhost:8000/posts").then((res) => {
      setPosts(res.data);
      // console.log(res.data);
    });

  {
    return (
      <div className="container">
        <p>All Posts</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Topic</th>
              <th scope="col">Description</th>
              <th scope="col">Post Category</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((posts, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>
                  <a
                    href={`/post/{posts._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {posts.topic}
                  </a>
                </td>
                <td>{posts.description}</td>
                <td>{posts.postCategory}</td>
                <td>
                  <a className="btn btn-warning" href="">
                    <i className=" fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="">
                    <i className=" far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success">
          <a href="/add" style={{ textDecoration: "none", color: "white" }}>
            {" "}
            Create New Post{" "}
          </a>
        </button>
      </div>
    );
  }
};

export default Home;
