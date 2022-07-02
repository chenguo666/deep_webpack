const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.ts",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "./build"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack use plugin",
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.ts$/,
        // 本质上是依赖typescript
        // use: "ts-loader",
        use: "babel-loader",
      },
    ],
  },
};
