// import "css-loader!../css/index.css";
import "../css/component.less";
import "../css/index.css";
import img from "../img/car.jpg";
function component() {
  const element = document.createElement("div");
  element.innerHTML = ["hello", "webpack"].join("");
  element.className = "content";
  // const imgEl = document.createElement("img");
  const imgEl = new Image();
  imgEl.src = img;
  imgEl.width = 100;
  imgEl.height = 100;
  element.appendChild(imgEl);

  const iEl = document.createElement("i");
  iEl.className = "why_icon iconfont icon-yangantanceqi";
  element.appendChild(iEl);
  return element;
}
document.body.appendChild(component());
