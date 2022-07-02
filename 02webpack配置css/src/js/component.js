// import "css-loader!../css/index.css";
import "../css/component.less";
import "../css/index.css";
function component() {
  const element = document.createElement("div");
  element.innerHTML = ["hello", "webpack"].join("");
  element.className = "content";
  // const imgEl = document.createElement("img");
  const imgEl = new Image();
  imgEl.src = require("../img/car.jpg").default;
  element.appendChild(imgEl);
  return element;
}
document.body.appendChild(component());
