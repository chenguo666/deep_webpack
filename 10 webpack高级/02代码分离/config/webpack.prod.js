const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const isProduction = true;
module.exports = {
  mode: "production",

  plugins: [new CleanWebpackPlugin({})],
};
