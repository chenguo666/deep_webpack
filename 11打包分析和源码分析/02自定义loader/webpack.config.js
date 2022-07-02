const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: ["hy-loader01", "hy-loader02"],
        // use:{
        //     loader: "hy-loader01",
        //     options: {
        //         name:'chan',
        //         age:18
        //     }
        // }
      },
      {
        test: /\.js$/i,
        // use: "hybable-loader",
        use: {
          loader: "hybabel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.md$/i,
        use: ["html-loader", "hymd-loader"],
      },
      //   {
      //     test: /\.js$/i,
      //     use: "hy-loader02",
      //     enforce: "pre",
      //   },
    ],
  },
  //   加载loader 如何node_modules里没有就在hy-loaders里找
  resolveLoader: {
    modules: ["node_modules", "./hy-loaders"],
  },
  plugins: [new HtmlWebpackPlugin()],
};
