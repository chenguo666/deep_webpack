import React, { Component } from "react";
import ReactDOM from "react-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello world",
    };
  }
  render() {
    return (
      <div>
        <h2>Hello World {this.state.message}</h2>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
