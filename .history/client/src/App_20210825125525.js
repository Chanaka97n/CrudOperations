import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () =>
    await axios.get("http://localhost:8000/posts").then((res) => {
      setPosts(res.data);
      console.log(res.data);
    });

  {
    return (
      <div>
        <div>
          <p>All Posts</p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Topic</th>
                <th scope="col">Decription</th>
                <th scope="col">Post Category</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{this.stae.posts.map}</tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default App;
