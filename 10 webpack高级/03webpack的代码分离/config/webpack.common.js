const resolveApp = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webapck = require("webpack");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const prodConfig = require("./webpack.prod");
const devConfig = require("./webpack.dev");
const commonConfig = (isProduction) => {
  return {
    entry: {
      main: "./src/main.js",
      index: "./src/index.js",
      // main: { import: "./src/main.js", dependOn: "shared" },
      // index: { import: "./src/index.js", dependOn: "shared" },
      // lodash: "lodash",
      // dayjs: "dayjs"
      // shared: ["lodash", "dayjs"]
    },
    output: {
      path: resolveApp("./build"),
      filename: "js/[name].bundle.js",
      chunkFilename: "js/[name].[hash:6].chunk.js",
      // publicpath:'cdn服务器对应的地址'
    },
    // 生产环境下 使用cdn
    externals: {
      dayjs: "dayjs",
    },
    resolve: {
      extensions: [".wasm", ".mjs", ".js", ".json", ".jsx", ".ts", ".vue"],
      alias: {
        "@": resolveApp("./src"),
        pages: resolveApp("./src/pages"),
      },
    },
    optimization: {
      // 对代码进行压缩相关的操作
      minimizer: [
        new TerserPlugin({
          extractComments: false,
        }),
      ],
      // natural: 使用自然数(不推荐),
      // named: 使用包所在目录作为name(在开发环境推荐)
      // deterministic: 生成id, 针对相同文件生成的id是不变
      // chunkIds: "deterministic",
      splitChunks: {
        // async异步导入
        // initial同步导入
        // all 异步/同步导入
        chunks: "all",
        // 最小尺寸: 如果拆分出来一个, 那么拆分出来的这个包的大小最小为minSize
        minSize: 20000,
        // 将大于maxSize的包, 拆分成不小于minSize的包
        maxSize: 20000,
        // minChunks表示引入的包, 至少被导入了几次
        minChunks: 1,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            filename: "[id]_vendors.js",
            // name: "vendor-chunks.js",
            priority: -10,
          },
          // bar: {
          //   test: /bar_/,
          //   filename: "[id]_bar.js"
          // }
          default: {
            minChunks: 2,
            filename: "common_[id].js",
            priority: -20,
          },
        },
      },
      // true/multiple 结果一样
      // runtimeChunk:true,
      // single 打包到一个 runtime.bundle.js
      // object: name
      runtimeChunk: {
        name: function (entrypoint) {
          return `why-${entrypoint.name}`;
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/i,
          use: "babel-loader",
        },
        {
          test: /\.vue$/i,
          use: "vue-loader",
        },
        {
          test: /\.css/i,
          // use: ["style-loader", "css-loader"],
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),
      // 但是不建议使用哦
      // 当代码中遇到某一个变量找不到时 会通过ProvidePlugin 自动导入对应的库
      new webapck.ProvidePlugin({
        axios: "axios",
        get: ["axios", "get"],
      }),
    ],
  };
};
module.exports = function (env) {
  const isProduction = env.production;
  process.env.NODE_ENV = isProduction ? "production" : "development";

  const config = isProduction ? prodConfig : devConfig;
  const mergeConfig = merge(commonConfig(isProduction), config);

  return mergeConfig;
};
