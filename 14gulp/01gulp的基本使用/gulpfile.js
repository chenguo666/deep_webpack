const { src, dest } = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const terser = require("gulp-terser");
const jsTask = (cb) => {
  // src 读取文件 输出到dist文件夹
  return (
    src("./src/*.js")
      .pipe(
        babel({
          presets: ["@babel/preset-env"],
        })
      )
      // .pipe(uglify())
      .pipe(
        terser({
          mangle: {
            toplevel: true,
          },
        })
      )
      .pipe(dest("./dist"))
  );
};
module.exports = {
  jsTask,
};
