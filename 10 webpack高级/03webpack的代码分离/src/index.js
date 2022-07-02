import dayjs from "dayjs";
import "./request";
import "./style.css";
console.log("from index.js");
console.log(dayjs(), "main");
// import element from "./element" // 同步导入
const button = document.createElement("button");
button.innerHTML = "加载元素";
button.addEventListener("click", () => {
  import("./element.js").then(({ default: element }) => {
    console.log(element);
  });
});
document.body.appendChild(button);
