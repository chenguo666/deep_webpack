import { sum, mul } from "./js/math.js";
const { dateFormate, priceFormate } = require("./js/format");
import "./js/component";

console.log(sum(10, 2012));
console.log(mul(10, 200123));

console.log(dateFormate());
console.log(priceFormate());

// var a = 1;
// (function a() {
//   a = 2;
//   console.log(a);
// })();
