import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import ReactApp from "./App.jsx";

import Vue from "vue";
import Vueapp from "./App.vue";

import "./math";

console.log("hello chan");
console.log("abc"); //
if (module.hot) {
  module.hot.accept("./math.js", () => {
    console.log("math 模块发生了热更新");
  });
}

ReactDOM.render(<ReactApp></ReactApp>, document.getElementById("app"));

new Vue({
  render: (h) => h(VueApp),
}).$mount("#root");

axios
  .get("http://localhost:80")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

console.log(process.env.NODE_ENV);

let baseURL = "";
if (process.env.NODE_ENV === "development") {
  baseURL = "";
} else {
  baseURL = "";
}
