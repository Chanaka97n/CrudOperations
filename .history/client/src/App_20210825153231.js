import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Route path="/" exact component={Home}></Route>
        <Route path="/add" exact component={CreatePost}></Route>
        <Route path="/edit/:id" exact component={EditPost}></Route>
        <Route path="/post/:id" exact component={Home}></Route>
      </div>
    </BrowserRouter>
  );
}
