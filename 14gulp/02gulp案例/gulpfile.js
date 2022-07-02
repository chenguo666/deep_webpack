const { src, dest, watch, series, parallel } = require("gulp");
const htmlMin = require("gulp-htmlmin");
const babel = require("gulp-babel");
const terser = require("gulp-terser");
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const postcssPresetEnv = require("postcss-preset-env");
const inject = require("gulp-inject");
const browserSync = require("browser-sync");
const del = require("del");
const htmlTask = () => {
  return src("./src/*.html")
    .pipe(
      htmlMin({
        // 折叠空白行
        collapseWhitespace: true,
      })
    )
    .pipe(dest("./dist"));
};
const jsTask = () => {
  return src("./src/js/**.js", { base: "./src" })
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(terser({ mangle: { toplevel: true } }))
    .pipe(dest("./dist"));
};
const lessTask = () => {
  return src("./src/css/*.less", { base: "./src" })
    .pipe(less())
    .pipe(postcss([postcssPresetEnv()]))
    .pipe(dest("./dist"));
};
const injectHtml = () => {
  var sources = src(["./dist/js/*.js", "./dist/css/*.css"]);
  return src("./dist/*.html")
    .pipe(inject(sources, { relative: true }))
    .pipe(dest("./dist"));
};
// 搭建本地服务
const bs = browserSync.create();
const server = () => {
  watch("./src/*.html", series(htmlTask, injectHtml));
  watch("./src/js/*.js", series(jsTask, injectHtml));
  watch("./src/css/*.js", series(lessTask, injectHtml));
  bs.init({
    port: 8088,
    open: true,
    files: "./dist/*",
    server: {
      baseDir: "./dist",
    },
  });
};
const clean = () => {
  return del(["dist"]);
};

const buildTask = series(
  clean,
  parallel(htmlTask, jsTask, lessTask),
  injectHtml
);
const serveTask = series(buildTask, server);

module.exports = {
  serveTask,
  buildTask,
};
