const resolveApp = require("./paths");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const isProduction = false;
console.log("加载devConfig配置文件");
module.exports = {
  mode: "deveolpment",
  devServer: {
    hot: true,
    httpOnly: true,
    compress: true,
    contentBase: resolveApp("./why"),
    watchContentBase: true,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        pathRewrite: {
          "^/api": "",
        },
        secure: false,
        changeOrigin: true,
      },
    },
    historyApiFallback: {
      rewrites: [{ from: /abc/, to: "/index.html" }],
    },
  },
  plugins: [new ReactRefreshWebpackPlugin()],
};
