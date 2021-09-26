import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  retrivePost() {
    axios.get("http://localhost:8000/posts").then((res) => {
      if (res.data.sucess) {
        this.setState({
          posts: res.data.existingPosts,
        });
      }
    });
  }

  render() {
    return <div></div>;
  }
}
