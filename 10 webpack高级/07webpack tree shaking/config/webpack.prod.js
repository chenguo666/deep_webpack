const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
// const PurgeCss =    require("purgecss-webpack-plugin");
const PurgeCssPlugin = require("purgecss-webpack-plugin");
const CompressionsPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InlineChunkHtmlPlugin = require("react-dev-utils/InlineChunkHtmlPlugin");
const isProduction = true;
const glob = require("glob");
const resolveApp = require("./paths");
module.exports = {
  mode: "development",
  devtool: "source-map",
  externals: {
    lodash: "_",
    dayjs: "dayjs",
  },
  optimization: {
    // usedExports 目的是标注出来那些函数是没有被使用的
    usedExports: true,
    minimize: true,
    minimizer: [
      // Terser将未使用的代码删除
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          compress: {
            arguments: false,
            dead_code: true,
          },
          mangle: true,
          toplevel: true,
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
    ],
  },
  plugins: [
    // 生成环境
    new CleanWebpackPlugin({}),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:6].css",
    }),
    new CssMinimizerPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new PurgeCssPlugin({
      paths: glob.sync(`${resolveApp("./src")}/**/*`, { nodir: true }),
      safelist: function () {
        return {
          standard: ["body"],
        };
      },
    }),
    new CompressionsPlugin({
      threshold: 0,
      test: /\.(css|js)$/i,
      minRatio: 0.8,
      algorithm: "gzip",
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime.*\.js/]),
    // new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};
