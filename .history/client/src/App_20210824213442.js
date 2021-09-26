import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios.get("http://localhost:8000/posts").then((res) => {
      if (res.data.sucess) {
        this.setState({
          posts: res.data.existingPosts,
        });
        console.log(res);
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.posts.map((posts) => (
          <div>
            <p>{posts.topic}</p>
          </div>
        ))}
      </div>
    );
  }
}
