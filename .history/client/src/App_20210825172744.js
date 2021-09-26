import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import EditPost from "./components/EditPost";
import CreatePost from "./components/CreatePost";
import PostDetails from "./components/PostDetails";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <div className="container">
        <Route path="/" exact component={Home}></Route>
        <Route path="/add" exact component={CreatePost}></Route>
        <Route path="/edit/:id" exact component={EditPost}></Route>
        <Route path="/post/:id" exact component={PostDetails}></Route>
      </div>
    </BrowserRouter>
  );
}
