const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const isProduction = true;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "production",
  plugins: [
    // 生成环境
    new CleanWebpackPlugin({}),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:8].css",
    }),
  ],
};
