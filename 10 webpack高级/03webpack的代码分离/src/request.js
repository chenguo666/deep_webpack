import axios, { get } from "axios";
axios.get("http://www.baidu.com").then((res) => {
  console.log(res);
});
get("http://www.baidu.com").then((res) => {
  console.log(res);
});
