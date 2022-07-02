import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Home from "pages/Home";
import About from "pages/About";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello react",
    };
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Link to="/home">首页</Link>
          <Link to="/about">关于</Link>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </BrowserRouter>
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}
