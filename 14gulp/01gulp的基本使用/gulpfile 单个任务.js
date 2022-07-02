const gulp = require("gulp");
// 定义任务
const foo = (cb) => {
  console.log("foo");
  cb();
};
gulp.task("bar", (cb) => {
  console.log("bar");
  cb();
});
module.exports = {
  foo,
};

module.exports.default = (cb) => {
  console.log("default task");
  cb();
};
