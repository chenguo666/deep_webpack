const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
module.exports = {
  // watch: true,
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    // 打包后的文件输出
    path: path.resolve(__dirname, "./build"),
    // 默认值时空字符串 开发者设为/ 路劲/bundle.js 浏览器会根据所在域名+路劲去请求对应的资源
    // 如果希望在本地直接打开html文件来运行 设置为./ 路劲时./bundle.js 可以根据相对路劲去查找资源
    publicPath: "./",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack use plugin",
      template: "./index.html",
    }),
  ],
  // 开发过程中开启一个本地服务
  devServer: {
    hot: true,
    // devServer里的 publicPath 默认 /
    publicPath: "",
    contentBase: "./build",
    proxy: {
      // "/api": "http://localhost:8080/",
      "/api": {
        target: "http://localhost:8080",
        pathRewrite: {
          "^/api": "",
        },
        secure: false,
      },
    },
    // historyApiFallback: true,
    historyApiFallback: {
      rewrites: [{ from: /abc/, to: "/index.html" }],
    },
  },
  resolve: {
    // mainFiles:['index']
    // 扩展名
    extensions: [".js", ".wasm", ".mjs", ".json", ".jsx", ".ts", ".vue"],
    // 路径别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};
