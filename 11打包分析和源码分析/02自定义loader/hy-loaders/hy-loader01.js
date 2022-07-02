const { getOptions } = require("loader-utils");
module.exports = function (content, sourcemap, meta) {
  console.log(content, "hahah");
  // 获取 传入的参数
  const options = getOptions(this);
  console.log("传入的参数是", options);
  return content + 132;
};
// module.exports.pitch = function () {
//   console.log("pitch loader");
// };
