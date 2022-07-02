import { dataFormat } from "./utils/format";
import _ from "lodash";
import "./css/style.css";
import { createApp } from "vue";
import VueApp from "./vue/App.vue";
const message = "i am a message xxxxx";
console.log(message);
const sum = (num1, num2) => {
  return num1 + num2;
};
console.log(dataFormat());
console.log(_.join("asdf", "fsada1111"));

const app = createApp(VueApp);
app.mount("#app");
export { sum };
