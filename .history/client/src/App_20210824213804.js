import React, { Component } from "react";
import axios from "axios";

const App = () => {
  // retrivePosts() {
  //   axios.get("http://localhost:8000/posts").then((res) => {
  //     if (res.data.sucess) {
  //       this.setState({
  //         posts: res.data.existingPosts,
  //       });
  //       console.log(res);
  //     }
  //   });
  // }

  {
    return (
      <div>
        hi
        {this.state.posts.map((posts) => (
          <div>
            <p>{posts.topic}</p>
          </div>
        ))}
      </div>
    );
  }
};

export default App;
